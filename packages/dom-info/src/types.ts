export interface DomInfo {
  getScrollOffset: (string) => Promise<any[]>;
  getBoundingClientRect: (string) => Promise<any[]>;
}
