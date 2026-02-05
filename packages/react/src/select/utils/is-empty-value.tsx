/**
 * Check if Option's value is empty
 */
export function isEmptyValue(value: any, isMultiple: boolean): boolean {
  if (isMultiple) {
    return !Array.isArray(value) || value.length === 0;
  }
  return value === undefined || value === null;
}
