import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('toast', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockShowToast = jest.fn((args) => {
    args?.success({});
  });
  const mockHideToast = jest.fn((args) => {
    args?.success({});
  });

  if (container === 'wechat') {
    globals.wx.showToast = mockShowToast;
    globals.wx.hideToast = mockHideToast;
  } else if (container === 'dingtalk') {
    globals.dd.showToast = mockShowToast;
    globals.dd.hideToast = mockHideToast;
  } else if (container === 'ali') {
    globals.my.showToast = mockShowToast;
    globals.my.hideToast = mockHideToast;
  } else if (container === 'bytedance') {
    globals.tt.showToast = mockShowToast;
    globals.tt.hideToast = mockHideToast;
  }

  const { show, hide, showToast, hideToast } = require('../src/index');

  await show({ content: 'abc' });
  expect(mockShowToast.mock.calls.length).toBe(1);
  if (container === 'ali' || container === 'dingtalk') {
    expect(mockShowToast.mock.calls[0][0].content).toBe('abc');
  } else {
    expect(mockShowToast.mock.calls[0][0].title).toBe('abc');
  }

  mockShowToast.mockClear();
  await showToast({ content: 'abc' });
  expect(mockShowToast.mock.calls.length).toBe(1);
  if (container === 'ali' || container === 'dingtalk') {
    expect(mockShowToast.mock.calls[0][0].content).toBe('abc');
  } else {
    expect(mockShowToast.mock.calls[0][0].title).toBe('abc');
  }

  await hide();
  expect(mockHideToast.mock.calls.length).toBe(1);

  mockHideToast.mockClear();
  await hideToast();
  expect(mockHideToast.mock.calls.length).toBe(1);
});
