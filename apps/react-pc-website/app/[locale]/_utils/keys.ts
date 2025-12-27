export const keys = Object.keys as <T>(
  obj: T,
) => (keyof T extends infer U ? (U extends string ? U : U extends number ? `${U}` : never) : never)[];
