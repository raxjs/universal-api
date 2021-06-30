import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('loading', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockShowLoading = jest.fn((args) => {
    args?.success({});
  });
  const mockHideLoading = jest.fn((args) => {
    args?.success({});
  });

  // TODO 临时模拟 window，待删除
  globals.window = {};

  if (container === 'wechat') {
    globals.wx.showLoading = mockShowLoading;
    globals.wx.hideLoading = mockHideLoading;
  } else if (container === 'dingtalk') {
    globals.dd.showLoading = mockShowLoading;
    globals.dd.hideLoading = mockHideLoading;
  } else if (container === 'ali') {
    globals.my.showLoading = mockShowLoading;
    globals.my.hideLoading = mockHideLoading;
  } else if (container === 'bytedance') {
    globals.tt.showLoading = mockShowLoading;
    globals.tt.hideLoading = mockHideLoading;
  }

  const { showLoading, hideLoading } = require('../src/index');
  await showLoading({
    content: 'abc',
  });
  expect(mockShowLoading.mock.calls.length).toBe(1);
  if (container === 'ali' || container === 'dingtalk') {
    expect(mockShowLoading.mock.calls[0][0].content).toBe('abc');
  } else {
    expect(mockShowLoading.mock.calls[0][0].title).toBe('abc');
  }

  await hideLoading();
  expect(mockHideLoading.mock.calls.length).toBe(1);
});
