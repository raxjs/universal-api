import { JSDOM } from 'jsdom';

// Note: `ali` includes: `dingtalk`
type Container = 'web' | 'wechat' | 'ali' | 'dingtalk' | 'bytedance' | 'kuaishou' | 'baidu';
type Globals = Record<'window' | 'wx' | 'my' | 'dd' | 'tt' | 'ks' | 'swan' | string, any>;

export const mapContainerToGlobalsKey: Record<Container, keyof Globals> = {
  web: 'window',
  wechat: 'wx',
  ali: 'my',
  dingtalk: 'dd',
  bytedance: 'tt',
  kuaishou: 'ks',
  baidu: 'swan',
};

export function createNoop() {
  return () => {
  };
}

export const noop = createNoop();

export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function createPromisifyImpl(value: any = {}) {
  return (args) => {
    args?.success?.(value);
  };
}

export function isAliContainer(container: Container) {
  return container === 'ali' || container === 'dingtalk';
}

/**
 * run test in mock container environment for special api
 * @param container
 * @param callback
 * @example see example at: src/packages/interactive/animation/__test__/api.test.ts
 */
export function testContainerAPI(
  container: Container,
  callback: (globals: Partial<Globals>) => any,
) {
  const map: Record<Container, Globals> = {
    web: {},
    wechat: { wx: { request: noop } },
    ali: { my: { alert: noop } },
    dingtalk: { my: { alert: noop }, dd: { alert: noop } },
    bytedance: { tt: { showToast: noop } },
    kuaishou: { ks: { showToast: noop } },
    baidu: { swan: { showToast: noop } },
  };

  if (container === 'web') {
    const { window } = new JSDOM();
    map.web.window = window;
    map.web.document = window.document;

    // innerText implementation
    // @see https://github.com/jsdom/jsdom/issues/1245
    Object.defineProperty(window.HTMLElement.prototype, 'innerText', {
      get() {
        return this.textContent;
      },
      set(val: string) {
        this.innerHTML = val.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      },
    });
  }

  const globals = map[container] || {};

  const proxyGlobals = new Proxy({}, {
    set(target: Globals | {}, p: PropertyKey, value: any, receiver: any): boolean {
      global[p] = value;
      return Reflect.set(target, p, value, receiver);
    },
    defineProperty(target: Globals | {}, p: PropertyKey, attributes: PropertyDescriptor): boolean {
      Object.defineProperty(global, p, attributes);
      return Reflect.defineProperty(target, p, attributes);
    },
    deleteProperty(target: Globals | {}, p: PropertyKey): boolean {
      delete global[p];
      return Reflect.deleteProperty(target, p);
    },
  });

  test(`Test container: ${container}`, async () => {
    // 执行测试前清除 require 模块缓存
    jest.resetModules();

    // set
    Object.assign(proxyGlobals, globals);

    try {
      // callback
      await callback(proxyGlobals);
    } finally {
      // clear
      Object.keys(proxyGlobals).forEach((k) => {
        delete global[k];
      });
    }
  });
}

type ConfigAPI = (api: string, mockImpl: jest.Mock) => void;

/**
 * batch run test in multiple mock container environment for special api
 * @param name
 * @param containers
 * @param callback
 */
export function testPlatformAPI(
  name: string,
  containers: Container[],
  callback: (container: Container, globals: Partial<Globals>, configAPI: ConfigAPI) => any,
) {
  describe(`Test Platform API: ${name}`, () => {
    for (const container of containers) {
      testContainerAPI(container, async (globals) => {
        const configAPI = (api: string, mockImpl: jest.Mock) => {
          const key = mapContainerToGlobalsKey[container];
          if (globals[key]) {
            globals[key][api] = mockImpl;
          }
        };
        await callback(container, globals, configAPI);
      });
    }
  });
}


export function testWebAPI(
  name: string,
  callback: (globals: Partial<Globals>) => any,
) {
  describe(`Test Platform API: ${name}`, () => {
    testContainerAPI('web', async (globals) => {
      await callback(globals);
    });
  });
}
