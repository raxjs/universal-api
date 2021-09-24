/**
 * @jest-environment jsdom
 */

import { sleep, createNoop, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('crateAudioContext', async (globals) => {
  // class XMLHttpRequest {
  //   open = jest.fn();
  //   onload = jest.fn();
  //   send = jest.fn();
  // }
  // globals.XMLHttpRequest = XMLHttpRequest;

  window.AudioContext = jest.fn().mockImplementation(() => {
    return {
      createBufferSource: () => {
        return {
          buffer: undefined,
          loop: undefined,
          playbackRate: {
            value: undefined,
          },
          connect: () => {},
          start: () => {},
        };
      },
      createGain: () => {
        return {
          gain: {
            value: undefined,
          },
          connect: () => {},
        };
      },
      resume: jest.fn().mockResolvedValue({}),
      suspend: jest.fn().mockResolvedValue({}),
      close: jest.fn().mockResolvedValue({}),
    };
  });

  const mockCreateAudioContext = jest.fn();
  globals.createAudioContext = mockCreateAudioContext;
  const { createAudioContext } = require('../src/index');
  const audioContext = createAudioContext();
  // expect(mockCreateAudioContext.mock.calls.length).toBe(1);

  const mockSrc = jest.spyOn(audioContext, 'src', 'set');
  const mockAutoplay = jest.spyOn(audioContext, 'autoplay', 'set');
  const mockLoop = jest.spyOn(audioContext, 'loop', 'set');
  const mockVolume = jest.spyOn(audioContext, 'volume', 'set');
  const mockDuration = jest.spyOn(audioContext, 'duration', 'get');
  const mockCurrentTime = jest.spyOn(audioContext, 'currentTime', 'get');
  const mockStartTime = jest.spyOn(audioContext, 'startTime', 'set');
  const mockPlaybackRate = jest.spyOn(audioContext, 'playbackRate', 'set');
  const mockPaused = jest.spyOn(audioContext, 'paused', 'get');
  const mockPlay = jest.spyOn(audioContext, 'play');
  const mockPause = jest.spyOn(audioContext, 'pause');
  const mockStop = jest.spyOn(audioContext, 'stop');
  const mockSeek = jest.spyOn(audioContext, 'seek');
  const mockDestroy = jest.spyOn(audioContext, 'destroy');
  const mockOnCanplay = jest.spyOn(audioContext, 'onCanplay');
  const mockOnPlay = jest.spyOn(audioContext, 'onPlay');
  const mockOnPause = jest.spyOn(audioContext, 'onPause');
  const mockOnStop = jest.spyOn(audioContext, 'onStop');
  const mockOnEnded = jest.spyOn(audioContext, 'onEnded');
  const mockOnError = jest.spyOn(audioContext, 'onError');
  const mockOnWaiting = jest.spyOn(audioContext, 'onWaiting');
  const mockOnSeeking = jest.spyOn(audioContext, 'onSeeking');
  const mockOnSeeked = jest.spyOn(audioContext, 'onSeeked');
  const mockOffCanplay = jest.spyOn(audioContext, 'offCanplay');
  const mockOffPlay = jest.spyOn(audioContext, 'offPlay');
  const mockOffPause = jest.spyOn(audioContext, 'offPause');
  const mockOffStop = jest.spyOn(audioContext, 'offStop');
  const mockOffEnded = jest.spyOn(audioContext, 'offEnded');
  const mockOffError = jest.spyOn(audioContext, 'offError');
  const mockOffWaiting = jest.spyOn(audioContext, 'offWaiting');
  const mockOffSeeking = jest.spyOn(audioContext, 'offSeeking');
  const mockOffSeeked = jest.spyOn(audioContext, 'offSeeked');

  audioContext.src = 'https://static.yximgs.com/udata/pkg/miniprogram-outer/test.m4a';
  expect(mockSrc).toHaveBeenCalled();
  expect(audioContext.src).toBe('https://static.yximgs.com/udata/pkg/miniprogram-outer/test.m4a');

  audioContext.autoplay = true;
  expect(mockAutoplay).toHaveBeenCalled();
  expect(audioContext.autoplay).toBe(true);

  audioContext.loop = true;
  expect(mockLoop).toHaveBeenCalled();
  expect(audioContext.loop).toBe(true);

  audioContext.volume = 1;
  expect(mockVolume).toHaveBeenCalled();
  expect(audioContext.volume).toBe(1);

  const durationValue = audioContext.duration;
  expect(mockDuration).toHaveBeenCalled();
  expect(durationValue).toBe(0);

  const currentTimeValue = audioContext.currentTime;
  expect(mockCurrentTime).toHaveBeenCalled();

  audioContext.startTime = 10;
  expect(mockStartTime).toHaveBeenCalled();
  expect(audioContext.startTime).toBe(10);

  audioContext.playbackRate = 2;
  expect(mockStartTime).toHaveBeenCalled();
  expect(audioContext.playbackRate).toBe(2);

  audioContext.play();
  expect(mockPlay).toHaveBeenCalled();
  const pausedValue = audioContext.paused;
  expect(mockPaused).toHaveBeenCalled();
  expect(pausedValue).toBe(false);

  audioContext.pause();
  expect(mockPause).toHaveBeenCalled();

  audioContext.stop();
  expect(mockStop).toHaveBeenCalled();

  audioContext.seek(20);
  expect(mockSeek).toHaveBeenCalled();

  audioContext.destroy();
  expect(mockDestroy).toHaveBeenCalled();

  let cb = createNoop();
  audioContext.onCanplay(cb);
  audioContext.offCanplay(cb);
  expect(mockOnCanplay.mock.calls[0]).toEqual([cb]);
  expect(mockOffCanplay.mock.calls[0]).toEqual([cb]);

  cb = createNoop();
  audioContext.onPlay(cb);
  audioContext.offPlay(cb);
  expect(mockOnPlay.mock.calls[0]).toEqual([cb]);
  expect(mockOffPlay.mock.calls[0]).toEqual([cb]);

  cb = createNoop();
  audioContext.onPause(cb);
  audioContext.offPause(cb);
  expect(mockOnPause.mock.calls[0]).toEqual([cb]);
  expect(mockOffPause.mock.calls[0]).toEqual([cb]);

  cb = createNoop();
  audioContext.onStop(cb);
  audioContext.offStop(cb);
  expect(mockOnStop.mock.calls[0]).toEqual([cb]);
  expect(mockOffStop.mock.calls[0]).toEqual([cb]);

  cb = createNoop();
  audioContext.onEnded(cb);
  audioContext.offEnded(cb);
  expect(mockOnEnded.mock.calls[0]).toEqual([cb]);
  expect(mockOffEnded.mock.calls[0]).toEqual([cb]);

  cb = createNoop();
  audioContext.onWaiting(cb);
  audioContext.offWaiting(cb);
  expect(mockOnWaiting.mock.calls[0]).toEqual([cb]);
  expect(mockOffWaiting.mock.calls[0]).toEqual([cb]);

  cb = createNoop();
  audioContext.onSeeking(cb);
  audioContext.offSeeking(cb);
  expect(mockOnSeeking.mock.calls[0]).toEqual([cb]);
  expect(mockOffSeeking.mock.calls[0]).toEqual([cb]);

  cb = createNoop();
  audioContext.onSeeked(cb);
  audioContext.offSeeked(cb);
  expect(mockOnSeeked.mock.calls[0]).toEqual([cb]);
  expect(mockOffSeeked.mock.calls[0]).toEqual([cb]);
});
