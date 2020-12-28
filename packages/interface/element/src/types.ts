export interface Element {
  getScrollOffset: (selector: string, context?: any) => Promise<any[]>;
  getBoundingClientRect: (selector: string, context?: any) => Promise<any[]>;
}

export interface Context {
  createSelectorQuery: () => Query;
}

interface Query {
  selectAll: (string) => object;
}
