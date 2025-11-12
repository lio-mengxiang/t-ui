export function findNode(dom: HTMLElement | Document, selector: string): HTMLElement | null {
  try {
    return dom.querySelector(selector);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e: any) {
    // console.error(e);
    return null;
  }
}
