import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('clipboard', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals, configAPI) => {
  const mockGetClipboard = jest.fn();
  const mockSetClipboard = jest.fn();
  configAPI('getClipboardData', mockGetClipboard);
  configAPI('setClipboardData', mockSetClipboard);

  const { getClipboard, setClipboard } = require('../src/index');

  getClipboard();
  expect(mockGetClipboard.mock.calls.length).toBe(1);

  setClipboard({ text: 'abc' });
  expect(mockSetClipboard.mock.calls[0][0]).toMatchObject(
    container === 'ali' || container === 'dingtalk'
      ? { text: 'abc' }
      : { data: 'abc' },
  );
});
