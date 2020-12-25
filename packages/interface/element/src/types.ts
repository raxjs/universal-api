export interface Element {
  getScrollOffset: (string) => Promise<any[]>;
  getBoundingClientRect: (string) => Promise<any[]>;
}

export interface Context {
  createSelectorQuery: () => Query;
}

interface Query {
  selectAll: (string) => object;
}
