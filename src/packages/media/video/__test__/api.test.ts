import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('video', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockChooseVideo = jest.fn(createPromisifyImpl());
  const mockCreateVideoContext = jest.fn();

  if (container === 'wechat') {
    globals.wx.chooseVideo = mockChooseVideo;
    globals.wx.createVideoContext = mockCreateVideoContext;
  } else if (container === 'dingtalk') {
    globals.dd.chooseVideo = mockChooseVideo;
    globals.dd.createVideoContext = mockCreateVideoContext;
  } else if (container === 'ali') {
    globals.my.chooseVideo = mockChooseVideo;
    globals.my.createVideoContext = mockCreateVideoContext;
  } else if (container === 'bytedance') {
    globals.tt.chooseVideo = mockChooseVideo;
    globals.tt.createVideoContext = mockCreateVideoContext;
  }

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
