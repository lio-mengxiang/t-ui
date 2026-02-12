export function arrayToObj<T extends Record<PropertyKey, any>, K extends keyof T>(list: readonly T[], key: K): Record<T[K], T> {
  return list.reduce(
    (obj, item) => {
      obj[item[key]] = item;
      return obj;
    },
    {} as Record<T[K], T>,
  );
}
