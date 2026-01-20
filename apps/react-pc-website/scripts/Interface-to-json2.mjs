/* eslint-disable no-console */
import * as ts from 'typescript';
import * as fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';

const require = createRequire(import.meta.url);

function parseInterface(filePath) {
  const program = ts.createProgram([filePath], { target: ts.ScriptTarget.ESNext });
  const checker = program.getTypeChecker();
  const sourceFile = program.getSourceFile(filePath);
  if (!sourceFile) return [];

  const results = [];
  ts.forEachChild(sourceFile, (node) => {
    if (ts.isInterfaceDeclaration(node)) {
      // 1. 获取接口本身的 JSDoc 标签（例如 @title）
      const interfaceSymbol = checker.getSymbolAtLocation(node.name);
      let title = '';

      if (interfaceSymbol) {
        const tags = interfaceSymbol.getJsDocTags();
        const titleTag = tags.find((tag) => tag.name === 'title');
        if (titleTag) {
          // 提取 @title 后的文本内容
          title = ts.displayPartsToString(titleTag.text).trim();
        }
      }

      // 2. 获取继承关系
      const extendsList = [];
      if (node.heritageClauses) {
        node.heritageClauses.forEach((c) => c.types.forEach((t) => extendsList.push(t.getText())));
      }

      // 3. 解析属性成员
      const properties = node.members
        .filter((m) => ts.isPropertySignature(m))
        .map((m) => {
          const symbol = checker.getSymbolAtLocation(m.name);
          const description = { zh: '', en: '' };
          let defaultValue = '';

          if (symbol) {
            symbol.getJsDocTags().forEach((tag) => {
              const text = ts.displayPartsToString(tag.text).trim();
              if (tag.name === 'zh') description.zh = text;
              if (tag.name === 'en') description.en = text;
              if (tag.name === 'default') defaultValue = text;
            });
          }

          return {
            name: m.name.getText(),
            type: m.type ? m.type.getText() : 'any',
            description,
            default: defaultValue,
          };
        });

      results.push({
        // 使用 @title 的内容作为 name，如果为空则使用接口名
        name: title || node.name.text,
        // 也可以保留原始接口名供调试
        interfaceName: node.name.text,
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

  configs.forEach((item) => {
    try {
      // 1. 检查目标文件是否已存在
      // 如果文件存在且配置中没有设置 force 为 true，则跳过
      if (fs.existsSync(item.out) && !item.force) {
        console.log(`⏩ 跳过: 文件已存在 -> ${item.out}`);
        return;
      }

      const entryPath = require.resolve(item.module);
      let packageRoot = path.dirname(entryPath);
      while (packageRoot !== '/' && !fs.existsSync(path.join(packageRoot, 'package.json'))) {
        packageRoot = path.dirname(packageRoot);
      }

      const targetPath = path.resolve(packageRoot, item.path);

      // 额外判断：如果源代码接口文件不存在，抛出错误
      if (!fs.existsSync(targetPath)) {
        throw new Error(`找不到接口源文件: ${targetPath}`);
      }

      const data = parseInterface(targetPath);

      // 生成 TS 文件内容
      const varName = item.varName || 'componentSchema';
      const tsContent = `
      // 该文件由 scripts/Interface-to-json2.mjs 脚本生成，请勿手动修改
      export const ${varName} = ${JSON.stringify(data, null, 2)};\n`;

      const outputDir = path.dirname(item.out);
      if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

      // 写入文件
      fs.writeFileSync(item.out, tsContent);
      execSync(`npx prettier --write "${item.out}"`);
      console.log(`✅ 已完成: ${item.name || item.module} -> ${item.out}`);
    } catch (err) {
      console.error(`❌ 出错 (${item.module}): ${err.message}`);
    }
  });
}

batchRun();
