import { isString } from './is';

// Replace empty string to &nbsp;
export function fillNBSP(str: any): any {
  if (!isString(str)) return str;
  // 匹配：连续 2 个以上空格 或 行尾 1 个以上空格
  // \u00A0 是不换行空格（NBSP）的 Unicode 编码，用于保持空格不被浏览器折叠
  return str.replace(/(\s{2,})|(\s+)$/g, (match: string) => '\u00A0'.repeat(match.length));
}
