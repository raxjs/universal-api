import { testPlatformAPI } from '@utils/__test__/util';
import confirm from "../src";

testPlatformAPI('confirm', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockShowConfirm = jest.fn((args) => {
    args?.success({});
  });

  if (container === 'wechat') {
    globals.wx.showModal = mockShowConfirm;
  } else if (container === 'dingtalk') {
    globals.dd.confirm = mockShowConfirm;
  } else if (container === 'ali') {
    globals.my.confirm = mockShowConfirm;
  } else if (container === 'bytedance') {
    globals.tt.showModal = mockShowConfirm;
  }

  const { confirm } = require('../src/index');
  await confirm({
    title: 'abc',
  });

  expect(mockShowConfirm.mock.calls.length).toBe(1);
  expect(mockShowConfirm.mock.calls[0][0].title).toBe('abc');
});
