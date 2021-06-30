import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('actionSheet', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockShowActionSheet = jest.fn((args) => {
    args?.success({});
  });

  if (container === 'wechat') {
    globals.wx.showActionSheet = mockShowActionSheet;
  } else if (container === 'dingtalk') {
    globals.dd.showActionSheet = mockShowActionSheet;
  } else if (container === 'ali') {
    globals.my.showActionSheet = mockShowActionSheet;
  } else if (container === 'bytedance') {
    globals.tt.showActionSheet = mockShowActionSheet;
  }

  const { showActionSheet } = require('../src/index');
  await showActionSheet({
    itemList: ['a', 'b', 'c'],
  });

  expect(mockShowActionSheet.mock.calls.length).toBe(1);
  expect(mockShowActionSheet.mock.calls[0][0].itemList).toEqual(['a', 'b', 'c']);
});
