type ContextMethods =
  'createSelectorQuery' | 'select' | 'selectAll' | 'selectViewport' | 'in' | 'exec'
  | 'boundingClientRect' | 'context' | 'getContext' | 'fields' | 'node' | 'scrollOffset'
  | string;

export class MockSelectorQueryImpl {
  selectorQueryContext: Record<ContextMethods, jest.Mock>;
  nodesRefContext: Record<ContextMethods, jest.Mock>;
  execResult: any;

  constructor(result?: any) {
    this.selectorQueryContext = {};
    this.nodesRefContext = {};
    this.setExecResult(result);
    this.initContext();
  }

  set(
    method: ContextMethods,
    contextType: 'SelectorQuery' | 'NodesRef',
    returnedType: 'SelectorQuery' | 'NodesRef',
    impl?: (...args: any[]) => void,
  ) {
    const ctx = contextType === 'SelectorQuery'
      ? this.selectorQueryContext
      : this.nodesRefContext;
    ctx[method] = jest.fn((...args: any[]) => {
      if (impl) {
        impl(...args);
      }
      return returnedType === 'SelectorQuery'
        ? this.selectorQueryContext
        : this.nodesRefContext;
    });
    return this.selectorQueryContext[method];
  }

  setExecResult(result?: any) {
    this.execResult = result;
    this.getMock('exec')?.mockClear();
    this.set('exec', 'SelectorQuery', 'NodesRef', (cb) => {
      cb?.(this.execResult);
    });
  }


  getMock(method: ContextMethods): jest.Mock | undefined {
    let res = this.selectorQueryContext[method];
    if (!res) {
      res = this.nodesRefContext[method];
    }
    return res;
  }

  clearMock() {
    Object.keys(this.selectorQueryContext).forEach((method) => {
      this.getMock(method).mockClear();
    });
    Object.keys(this.nodesRefContext).forEach((method) => {
      this.getMock(method).mockClear();
    });
  }

  clear() {
    this.clearMock();
    this.initContext();
  }

  private initContext() {
    this.selectorQueryContext = {};
    this.nodesRefContext = {};

    this.set('createSelectorQuery', 'SelectorQuery', 'SelectorQuery');
    this.set('in', 'SelectorQuery', 'SelectorQuery');
    this.set('select', 'SelectorQuery', 'NodesRef');
    this.set('selectAll', 'SelectorQuery', 'NodesRef');
    this.set('selectViewport', 'SelectorQuery', 'NodesRef');
    this.set('exec', 'SelectorQuery', 'NodesRef', (cb) => {
      cb?.(this.execResult);
    });

    this.set('boundingClientRect', 'NodesRef', 'SelectorQuery');
    this.set('context', 'NodesRef', 'SelectorQuery');
    this.set('getContext', 'NodesRef', 'SelectorQuery'); // bytedance
    this.set('fields', 'NodesRef', 'SelectorQuery');
    this.set('node', 'NodesRef', 'SelectorQuery');
    this.set('scrollOffset', 'NodesRef', 'SelectorQuery');
  }
}

