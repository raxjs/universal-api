import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('crateAudioContext', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockCreateAudioContext = jest.fn();

  // TODO 临时模拟 window，待删除
  globals.window = {};
  configAPI('createInnerAudioContext', mockCreateAudioContext);

  const { createAudioContext } = require('../src/index');
  await createAudioContext({
    useWebAudioImplement: true,
  });
  expect(mockCreateAudioContext.mock.calls.length).toBe(1);
  if (container === 'wechat') {
    expect(mockCreateAudioContext.mock.calls[0][0].useWebAudioImplement).toBe(true);
  } else {
    expect(mockCreateAudioContext.mock.calls[0][0]).toBe(undefined);
  }
});
