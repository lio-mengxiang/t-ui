import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';

// 提取标题的函数
function extractHeadings(content) {
  const headingRegex = /^(?:\{\/\*\s*)?(#{2,3})\s+(.+?)(?:\s*\*\/\})?$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content))) {
    const level = match[1].length;
    const text = match[2];
    headings.push({ level, text });
  }

  const root = [];
  const stack = [];

  for (const heading of headings) {
    while (stack.length > 0 && heading.level <= stack[stack.length - 1].level) {
      stack.pop();
    }
    const node = { ...heading };
    if (stack.length === 0) {
      root.push(node);
    } else {
      const parent = stack[stack.length - 1];
      parent.items = parent.items || [];
      parent.items.push(node);
    }
    stack.push(node);
  }
  return root;
}

// 核心逻辑：获取触发命令的当前目录
const targetDir = process.env.INIT_CWD || process.cwd();
console.log(`📂 正在处理目录: ${targetDir}`);

try {
  const files = readdirSync(targetDir);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

  if (mdxFiles.length === 0) {
    console.log('--- 📭 未发现 .mdx 文件 ---');
    process.exit(0);
  }

  mdxFiles.forEach((file) => {
    const filepath = resolve(targetDir, file);
    const content = readFileSync(filepath, 'utf-8');
    const toc = extractHeadings(content);

    // 判断逻辑：是否以 .en.mdx 结尾
    const isEn = file.endsWith('.en.mdx');
    const fileName = isEn ? 'enCatalog.ts' : 'zhCatalog.ts';
    const variableName = isEn ? 'enCatalog' : 'zhCatalog';

    const tsContent = `// Auto-generated from ${file}\nexport const ${variableName} = ${JSON.stringify(toc, null, 2)};\n`;
    const outputPath = resolve(targetDir, fileName);

    // 写入文件
    writeFileSync(outputPath, tsContent, 'utf-8');

    // 使用 Prettier 格式化
    try {
      execSync(`npx prettier --write "${outputPath}"`);
      console.log(`✅ 已生成并格式化: ${fileName}`);
      // eslint-disable-next-line no-unused-vars
    } catch (_) {
      console.warn(`⚠️  文件已生成，但 Prettier 格式化失败: ${fileName}`);
    }
  });

  console.log(`\n🎉 处理完成，共转换 ${mdxFiles.length} 个文件。`);
} catch (err) {
  console.error('❌ 执行失败:', err.message);
}
