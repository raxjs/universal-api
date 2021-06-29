type Container = 'web' | 'wechat' | 'alipay' | 'bytedance' | 'kuaishou' | 'baidu';
type Globals = Record<'window' | 'wx' | 'my' | 'tt' | 'ks' | 'swan' | string, any>;

export const noop = () => {
};

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
  const map = {
    web: { window: { onload: noop } },
    wechat: { wx: { login: noop } },
    alipay: { my: { alert: noop } },
    bytedance: { tt: { showToast: noop } },
    kuaishou: { ks: { showToast: noop } },
    baidu: { swan: { showToast: noop } },
  };
  const globals = map[container] || {};

  test(`Test container: ${container}`, async () => {
    // set
    Object.assign(global, globals);

    // callback
    await callback(globals);

    // clear
    Object.keys(globals).forEach((k) => {
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
