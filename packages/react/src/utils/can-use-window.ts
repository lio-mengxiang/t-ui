export function canUseDom(): boolean {
  // 既检查 window 存在，也确保 document 和 createElement 可用
  return typeof window !== 'undefined' && !!window.document?.createElement;
}
