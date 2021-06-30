import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('clipboard', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockGetClipboard = jest.fn();
  const mockSetClipboard = jest.fn();

  if (container === 'wechat') {
    globals.wx.getClipboardData = mockGetClipboard;
    globals.wx.setClipboardData = mockSetClipboard;
  } else if (container === 'dingtalk') {
    globals.dd.getClipboard = mockGetClipboard;
    globals.dd.setClipboard = mockSetClipboard;
  } else if (container === 'ali') {
    globals.my.getClipboard = mockGetClipboard;
    globals.my.setClipboard = mockSetClipboard;
  } else if (container === 'bytedance') {
    globals.tt.getClipboardData = mockGetClipboard;
    globals.tt.setClipboardData = mockSetClipboard;
  }

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
