import { createPromisifyImpl, isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('vibrate', ['wechat', 'ali', 'dingtalk', 'bytedance', 'baidu'], async (container, globals, configAPI) => {
  const mockVibrateShort = jest.fn(createPromisifyImpl());
  const mockVibrateLong = jest.fn(createPromisifyImpl());
  const mockAliVibrateLong = jest.fn();
  const mockAliVibrateShort = jest.fn();
  if (isAliContainer(container)) {
    configAPI('vibrateShort', mockAliVibrateShort);
    configAPI('vibrateLong', mockAliVibrateLong);
  } else {
    configAPI('vibrateShort', mockVibrateShort);
    configAPI('vibrateLong', mockVibrateLong);
  }
  

  const { vibrateShort, vibrateLong } = require('../src/index');

  if (isAliContainer(container)) {
    vibrateShort({ success: () => {} });
    expect(mockAliVibrateShort.mock.calls.length).toBe(1);
    vibrateLong({ success: () => {} });
    expect(mockAliVibrateLong.mock.calls.length).toBe(1);
  } else {
    await vibrateShort({ success: () => {} });
    expect(mockVibrateShort.mock.calls.length).toBe(1);
  
    await vibrateLong({ success: () => {} });
    expect(mockVibrateLong.mock.calls.length).toBe(1);
  }
});
