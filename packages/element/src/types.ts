export interface Element {
  getScrollOffset: (string, Context?) => Promise<any[]>;
  getBoundingClientRect: (string, Context?) => Promise<any[]>;
}

export interface Context {
  createSelectorQuery: () => Query;
}

interface Query {
  selectAll: (string) => object;
}
