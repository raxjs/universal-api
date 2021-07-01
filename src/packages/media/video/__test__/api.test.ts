import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('video', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals, configAPI) => {
  const mockChooseVideo = jest.fn(createPromisifyImpl());
  const mockCreateVideoContext = jest.fn();
  configAPI('chooseVideo', mockChooseVideo);
  configAPI('createVideoContext', mockCreateVideoContext);

  const { chooseVideo, createVideoContext } = require('../src/index');

  await chooseVideo({
    compressed: true,
  });
  expect(mockChooseVideo.mock.calls.length).toBe(1);
  expect(mockChooseVideo.mock.calls[0][0].compressed).toBe(true);

  createVideoContext('abc');
  expect(mockCreateVideoContext.mock.calls.length).toBe(1);
  expect(mockCreateVideoContext.mock.calls).toEqual([['abc']]);
});
