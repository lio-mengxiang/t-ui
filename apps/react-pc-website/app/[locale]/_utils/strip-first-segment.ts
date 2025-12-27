export function stripFirstSegment(path: string) {
  return path.replace(/^\/[^/]+/, '');
}
