import { isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('clipboard', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockGetClipboard = jest.fn();
  const mockSetClipboard = jest.fn();

  if (isAliContainer(container)) {
    configAPI('getClipboard', mockGetClipboard);
    configAPI('setClipboard', mockSetClipboard);
  } else {
    configAPI('getClipboardData', mockGetClipboard);
    configAPI('setClipboardData', mockSetClipboard);
  }

  const { getClipboard, setClipboard } = require('../src/index');

  getClipboard();
  expect(mockGetClipboard.mock.calls.length).toBe(1);

  setClipboard({ text: 'abc' });
  expect(mockSetClipboard.mock.calls[0][0]).toMatchObject(
    isAliContainer(container)
      ? { text: 'abc' }
      : { data: 'abc' },
  );
});
