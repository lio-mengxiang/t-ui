/* eslint-disable no-console */
import * as ts from 'typescript';
import * as fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';

const require = createRequire(import.meta.url);

/**
 * 辅助函数：兼容不同 TS 版本获取 JSDoc 注释文本
 */
function getJSDocComment(tag) {
  if (!tag.comment) return '';
  if (typeof tag.comment === 'string') return tag.comment;
  if (Array.isArray(tag.comment)) {
    return ts.getTextOfJSDocComment(tag.comment) || '';
  }
  return '';
}

/**
 * 辅助函数：从 AST 节点直接查找指定的 JSDoc Tag 内容
 */
function getTagTextFromNode(node, tagName) {
  const tags = ts.getJSDocTags(node);
  const targetTag = tags.find((tag) => tag.tagName.getText() === tagName);
  if (targetTag) {
    return getJSDocComment(targetTag).trim();
  }
  return '';
}

function parseInterface(filePath) {
  const program = ts.createProgram([filePath], {
    target: ts.ScriptTarget.ESNext,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    allowJs: true,
  });

  const checker = program.getTypeChecker();
  const sourceFile = program.getSourceFile(filePath);

  if (!sourceFile) {
    console.warn(`⚠️ 警告: 无法加载源文件 ${filePath}`);
    return [];
  }

  const results = [];

  ts.forEachChild(sourceFile, (node) => {
    let members = [];
    let extendsList = [];
    let isSupported = false;
    let isSimpleType = false;
    let typeDisplay = '';

    // --- 1. 处理 Interface ---
    if (ts.isInterfaceDeclaration(node)) {
      isSupported = true;
      members = [...node.members];
      if (node.heritageClauses) {
        node.heritageClauses.forEach((c) => c.types.forEach((t) => extendsList.push(t.getText())));
      }
    }
    // --- 2. 处理 Type Alias ---
    else if (ts.isTypeAliasDeclaration(node)) {
      isSupported = true;
      if (ts.isTypeLiteralNode(node.type)) {
        // 对象字面量: type A = { ... }
        members = [...node.type.members];
      } else if (ts.isIntersectionTypeNode(node.type)) {
        // 交叉类型: type A = B & { ... }
        node.type.types.forEach((t) => {
          if (ts.isTypeLiteralNode(t)) {
            members.push(...t.members);
          } else {
            extendsList.push(t.getText());
          }
        });
      } else {
        // 联合类型或简单类型: type A = 'add' | 'remove' 或 type B = string
        isSimpleType = true;
        typeDisplay = node.type.getText();
      }
    }

    if (isSupported) {
      const title = getTagTextFromNode(node, 'title');

      const properties = members
        .filter((m) => ts.isPropertySignature(m))
        .map((m) => {
          const symbol = checker.getSymbolAtLocation(m.name);
          const description = { zh: '', en: '' };
          let defaultValue = '';

          const zhText = getTagTextFromNode(m, 'zh');
          const enText = getTagTextFromNode(m, 'en');
          const defaultText = getTagTextFromNode(m, 'default');

          if (zhText) description.zh = zhText;
          if (enText) description.en = enText;
          if (defaultText) defaultValue = defaultText;

          if ((!zhText || !enText) && symbol) {
            const tags = symbol.getJsDocTags();
            tags.forEach((tag) => {
              const tagName = tag.name;
              const tagText = ts.displayPartsToString(tag.text).trim();
              if (tagName === 'zh' && !description.zh) description.zh = tagText;
              if (tagName === 'en' && !description.en) description.en = tagText;
              if (tagName === 'default' && !defaultValue) defaultValue = tagText;
            });
          }

          return {
            name: m.name.getText(),
            optional: !!m.questionToken,
            type: m.type ? m.type.getText() : 'any',
            description,
            default: defaultValue,
          };
        });

      results.push({
        // 优先使用 @title，没有则使用变量名
        name: title || node.name.text,
        interfaceName: node.name.text,
        // 如果是简单/联合类型，标识其类型字符串，否则标识为 object
        type: isSimpleType ? typeDisplay : 'object',
        extends: extendsList,
        properties,
      });
    }
  });
  return results;
}

// --- 批量运行逻辑 ---
async function batchRun() {
  const configPath = path.resolve('./scripts/gen-config.json');
  if (!fs.existsSync(configPath)) {
    console.error(`❌ 错误: 配置文件 ${configPath} 不存在`);
    return;
  }

  const configs = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

  for (const item of configs) {
    try {
      if (fs.existsSync(item.out) && !item.force) {
        console.log(`⏩ 跳过: 文件已存在 -> ${item.out}`);
        continue;
      }

      let packageRoot;
      try {
        const entryPath = require.resolve(item.module);
        packageRoot = path.dirname(entryPath);
        while (packageRoot !== '/' && !fs.existsSync(path.join(packageRoot, 'package.json'))) {
          packageRoot = path.dirname(packageRoot);
        }
      } catch {
        throw new Error(`无法解析模块路径: ${item.module}`);
      }

      const targetPath = path.resolve(packageRoot, item.path);
      if (!fs.existsSync(targetPath)) {
        throw new Error(`找不到接口源文件: ${targetPath}`);
      }

      const data = parseInterface(targetPath);

      const varName = item.varName || 'componentSchema';
      const tsContent = `
/**
 * 该文件由脚本自动生成
 * 源文件: ${item.module}/${item.path}
 * 请勿手动修改
 */
export const ${varName} = ${JSON.stringify(data, null, 2)};\n`;

      const outputDir = path.dirname(item.out);
      if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

      fs.writeFileSync(item.out, tsContent);

      try {
        execSync(`npx prettier --write "${item.out}"`, { stdio: 'ignore' });
      } catch {
        // 静默处理格式化错误
      }

      console.log(`✅ 已完成: [${data.length} 条定义] ${item.module} -> ${item.out}`);
    } catch (err) {
      console.error(`❌ 出错 (${item.module}): ${err.message}`);
    }
  }
}

batchRun();
