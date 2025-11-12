const opt = Object.prototype.toString

export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === '[object Array]'
}
