type Container = 'web' | 'wechat' | 'alipay' | 'bytedance' | 'kuaishou' | 'baidu';
type ENV = Record<'window' | 'wx' | 'my' | 'tt' | 'ks' | 'swan' | string, any>;

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
  callback: (env: ENV) => any,
) {
  const map = {
    web: { window: { onload: noop } },
    wechat: { wx: { login: noop } },
    alipay: { my: { alert: noop } },
    bytedance: { tt: { showToast: noop } },
    kuaishou: { ks: { showToast: noop } },
    baidu: { swan: { showToast: noop } },
  };
  const env = map[container] || {};

  test(`Test container: ${container}`, async () => {
    // set env
    Object.assign(global, env);

    // callback
    await callback(env);

    // clear env
    Object.keys(env).forEach((k) => {
      delete global[k];
    });
  });
}

/**
 * batch run test in multiple mock container environment for special api
 * @param containers
 * @param callback
 */
export function testPlatformAPI(
  name: string,
  containers: Container[],
  callback: (container: Container, env: ENV) => any,
) {
  describe(`Test Platform API: ${name}`, () => {
    beforeEach(() => {
      jest.resetModules();
    });

    for (const container of containers) {
      testContainerAPI(container, async (env) => {
        await callback(container, env);
      });
    }
  });
}
