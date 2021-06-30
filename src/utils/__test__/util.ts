// Note: `ali` 包含: dingtalk
type Container = 'web' | 'wechat' | 'ali' | 'bytedance' | 'kuaishou' | 'baidu' | 'dingtalk';
type Globals = Record<'window' | 'wx' | 'my' | 'dd' | 'tt' | 'ks' | 'swan' | string, any>;

export function createNoop() {
  return () => {
  };
}

export const noop = createNoop();

/**
 * run test in mock container environment for special api
 * @param container
 * @param callback
 * @example see example at: src/packages/interactive/animation/__test__/api.test.ts
 */
export function testContainerAPI(
  container: Container,
  callback: (globals: Globals) => any,
) {
  const map: Record<Container, Globals> = {
    web: { window: { onload: noop } },
    wechat: { wx: { login: noop } },
    ali: { my: { alert: noop } },
    dingtalk: { my: { alert: noop }, dd: { alert: noop } },
    bytedance: { tt: { showToast: noop } },
    kuaishou: { ks: { showToast: noop } },
    baidu: { swan: { showToast: noop } },
  };

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
    // set
    Object.assign(proxyGlobals, globals);

    // callback
    await callback(proxyGlobals);

    // clear
    Object.keys(proxyGlobals).forEach((k) => {
      delete global[k];
    });
  });
}

/**
 * batch run test in multiple mock container environment for special api
 * @param name
 * @param containers
 * @param callback
 */
export function testPlatformAPI(
  name: string,
  containers: Container[],
  callback: (container: Container, globals: Globals) => any,
) {
  describe(`Test Platform API: ${name}`, () => {
    beforeEach(() => {
      jest.resetModules();
    });

    for (const container of containers) {
      testContainerAPI(container, async (globals) => {
        await callback(container, globals);
      });
    }
  });
}
