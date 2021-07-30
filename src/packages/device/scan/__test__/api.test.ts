import { createPromisifyImpl, isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('scan', ['wechat', 'ali', 'bytedance', 'kuaishou', 'baidu'], async (container, globals) => {
  const mockScanCode = jest.fn(createPromisifyImpl());

  if (container === 'wechat') {
    globals.wx.scanCode = mockScanCode;
  } else if (container === 'ali') {
    globals.my.scan = mockScanCode;
  } else if (container === 'bytedance') {
    globals.tt.scanCode = mockScanCode;
  } else if (container === 'kuaishou') {
    globals.ks.scanCode = mockScanCode;
  } else if (container === 'baidu') {
    globals.swan.scanCode = mockScanCode;
  }

  const { scanCode } = require('../src/index');

  await scanCode({ hideAlbum: true });
  expect(mockScanCode.mock.calls.length).toBe(1);
  if (isAliContainer(container)) {
    expect(mockScanCode.mock.calls[0][0].hideAlbum).toBe(true);
  } else if (container === 'baidu') {
    expect(mockScanCode.mock.calls[0][0].hideAlbum).toBe(undefined);
  } else {
    expect(mockScanCode.mock.calls[0][0].onlyFromCamera).toBe(true);
  }
});
