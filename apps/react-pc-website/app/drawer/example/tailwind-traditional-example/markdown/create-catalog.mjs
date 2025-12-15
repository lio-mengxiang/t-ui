import { existsSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

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

  // 用栈构建树状结构
  const root = [];
  const stack = [];

  for (const heading of headings) {
    // 从栈中找到 parent
    while (stack.length > 0 && heading.level <= stack[stack.length - 1].level) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(heading);
    } else {
      const parent = stack[stack.length - 1];
      parent.items = parent.items || [];
      parent.items.push(heading);
    }

    stack.push(heading);
  }

  return root;
}

// 主执行逻辑
const filename = process.argv[2];

if (!filename) {
  console.error('❌ 请输入要读取的文件名，例如: node create-catalog.mjs button.mdx');
  process.exit(1);
}

const filepath = resolve(process.cwd(), filename);

if (!existsSync(filepath)) {
  console.error(`❌ 文件未找到: ${filepath}`);
  process.exit(1);
}

const content = readFileSync(filepath, 'utf-8');
const toc = extractHeadings(content);

const tsContent = `// Auto-generated catalog from ${filename}
export const catalogList = ${JSON.stringify(toc, null, 2)};\n`;

const outputPath = resolve(process.cwd(), 'catalog.ts');

writeFileSync(outputPath, tsContent, 'utf-8');
