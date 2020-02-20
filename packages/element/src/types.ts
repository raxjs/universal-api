export interface Element {
  getScrollOffset: (string) => Promise<any[]>;
  getBoundingClientRect: (string) => Promise<any[]>;
}
