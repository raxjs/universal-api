import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('actionSheet', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockShowActionSheet = jest.fn(createPromisifyImpl());
  configAPI('showActionSheet', mockShowActionSheet);

  const { showActionSheet } = require('../src/index');
  await showActionSheet({
    itemList: ['a', 'b', 'c'],
  });

  expect(mockShowActionSheet.mock.calls.length).toBe(1);
  expect(mockShowActionSheet.mock.calls[0][0].itemList).toEqual(['a', 'b', 'c']);
});
