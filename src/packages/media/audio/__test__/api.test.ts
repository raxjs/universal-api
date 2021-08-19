import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('tabBar', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockCreateInnerAudioContext = jest.fn();

  // TODO 临时模拟 window，待删除
  globals.window = {};
  configAPI('createInnerAudioContext', mockCreateInnerAudioContext);

  const { createInnerAudioContext } = require('../src/index');
  await createInnerAudioContext({
    useWebAudioImplement: true,
  });
  expect(mockCreateInnerAudioContext.mock.calls.length).toBe(1);
  if (container === 'wechat') {
    expect(mockCreateInnerAudioContext.mock.calls[0][0].useWebAudioImplement).toBe(true);
  } else {
    expect(mockCreateInnerAudioContext.mock.calls[0][0]).toBe(undefined);
  }
});
