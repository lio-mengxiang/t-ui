export function hasIntersection<T>(arr1: T[], arr2: T[]): boolean {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length > arr2.length) [arr1, arr2] = [arr2, arr1];
  const set = new Set<T>(arr1);
  for (const item of arr2) {
    if (set.has(item)) {
      return true;
    }
  }
  return false;
}
