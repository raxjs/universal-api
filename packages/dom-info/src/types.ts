export interface DomInfo {
  getScrollOffset: (string) => Promise<Array<any>>,
  getBoundingClientRect: (string) => Promise<Array<any>>,
}
