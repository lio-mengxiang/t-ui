export function getNodeName(element: any): string {
  return (element?.nodeName || '').toLowerCase();
}
