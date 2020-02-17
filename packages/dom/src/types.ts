export interface Dom {
  getScrollOffset: (string) => Promise<any[]>;
  getBoundingClientRect: (string) => Promise<any[]>;
}
