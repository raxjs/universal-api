import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('intersectionObserver', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockCreateIntersectionObserver = jest.fn();

  if (container === 'wechat') {
    globals.wx.createIntersectionObserver = mockCreateIntersectionObserver;
  } else if (container === 'dingtalk') {
    globals.dd.createIntersectionObserver = mockCreateIntersectionObserver;
  } else if (container === 'ali') {
    globals.my.createIntersectionObserver = mockCreateIntersectionObserver;
  } else if (container === 'bytedance') {
    globals.tt.createIntersectionObserver = mockCreateIntersectionObserver;
  }

  const { default: createIntersectionObserver } = require('../src/index');
  createIntersectionObserver({
    thresholds: [1],
    selectAll: false,
  });

  if (container === 'ali' || container === 'dingtalk') {
    expect(mockCreateIntersectionObserver.mock.calls).toEqual([[{ thresholds: [1], selectAll: false }]]);
  } else {
    expect(mockCreateIntersectionObserver.mock.calls).toEqual([[null, { thresholds: [1], selectAll: false, observeAll: false }]]);
  }
});
