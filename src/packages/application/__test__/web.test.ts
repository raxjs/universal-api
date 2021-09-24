import { sleep, createNoop, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('application', async (globals) => {
  const {
    getApp,
    getCurrentPages,
    getLaunchOptionsSync,
    onError,
    offError,
    onUnhandledRejection,
    offUnhandledRejection,
  } = require('../src/index');

  const mockAddEventListener = jest.spyOn(window, 'addEventListener');
  const mockRemoveEventListener = jest.spyOn(window, 'removeEventListener');

  const app = getApp();
  expect(app).toBe(window);

  const expectCurrentPages = [expect.objectContaining({
    pageId: expect.stringMatching(/.*-1/),
    query: { '': undefined },
    hash: { '': undefined },
  })];
  const currentPages = getCurrentPages();
  expect(currentPages).toEqual(expectCurrentPages);

  const expectLaunchOptionsSync = {
    path: 'blank',
    query: {},
  };
  const launchOptionsSync = getLaunchOptionsSync();
  expect(launchOptionsSync).toEqual(expectLaunchOptionsSync);

  let cb = createNoop();
  onError(cb);
  expect(mockAddEventListener.mock.calls[0]).toEqual(['error', cb]);

  cb = createNoop();
  offError(cb);
  expect(mockRemoveEventListener.mock.calls[0]).toEqual(['error', cb]);

  cb = createNoop();
  onUnhandledRejection(cb);
  expect(mockAddEventListener.mock.calls[1]).toEqual(['unhandledrejection', cb]);

  cb = createNoop();
  offUnhandledRejection(cb);
  expect(mockRemoveEventListener.mock.calls[1]).toEqual(['unhandledrejection', cb]);
});
