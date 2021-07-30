import { isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('intersectionObserver', ['wechat', 'ali', 'dingtalk', 'bytedance', 'baidu'], async (container, globals, configAPI) => {
  const mockCreateIntersectionObserver = jest.fn();
  configAPI('createIntersectionObserver', mockCreateIntersectionObserver);

  const { default: createIntersectionObserver } = require('../src/index');
  createIntersectionObserver({
    thresholds: [1],
    selectAll: false,
  });

  if (isAliContainer(container) || container === 'baidu') {
    expect(mockCreateIntersectionObserver.mock.calls).toEqual([[{ thresholds: [1], selectAll: false }]]);
  } else {
    expect(mockCreateIntersectionObserver.mock.calls).toEqual([[null, { thresholds: [1], selectAll: false, observeAll: false }]]);
  }
});
