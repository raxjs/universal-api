import { sleep, testWebAPI } from '@/utils/__test__/util';

testWebAPI('recorder', async (globals) => {
  const mockConstructor = jest.fn();
  const mockStart = jest.fn(function () {
    this.state = 'recording';
    this.onstart?.();
  });
  const mockStop = jest.fn(function () {
    this.state = 'inactive';
    this.onstop?.();
  });
  const mockPause = jest.fn(function () {
    this.state = 'paused';
    this.onpause?.();
  });
  const mockResume = jest.fn(function () {
    this.state = 'recording';
    this.onresume?.();
  });

  globals.navigator = {
    mediaDevices: {
      getUserMedia: async () => 'a',
    },
  };
  globals.MediaRecorder = class {
    state = 'inactive';
    start = mockStart;
    stop = mockStop;
    pause = mockPause;
    resume = mockResume;

    constructor(x) {
      mockConstructor(x);
    }
  };

  const { getRecorderManager } = require('../src/index');
  const recorderManager = getRecorderManager();

  recorderManager.start();
  await sleep(10);
  expect(mockConstructor).toBeCalled();
  expect(mockStart).toBeCalled();

  recorderManager.pause();
  expect(mockPause).toBeCalled();

  recorderManager.resume();
  expect(mockResume).toBeCalled();

  recorderManager.stop();
  expect(mockStop).toBeCalled();
});
