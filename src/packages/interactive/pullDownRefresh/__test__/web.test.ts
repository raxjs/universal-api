import { testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('pullDownRefresh', async () => {
  jest.useFakeTimers();
  const { startPullDownRefresh, stopPullDownRefresh, onPullDownRefresh } = require('../src/index');

  await startPullDownRefresh();
  expect(document.body).toMatchSnapshot();

  await stopPullDownRefresh();
  expect(document.body).toMatchSnapshot();

  const mockCallback = jest.fn();
  await onPullDownRefresh({
    triggerDistance: 100,
    eventCallback: mockCallback,
  });
  const domUtil = new DOMUtil(document.body);
  domUtil.trigger('touchstart', { touches: [{ pageY: 0 }] });
  jest.advanceTimersByTime(30);
  domUtil.trigger('touchmove', { touches: [{ pageY: 60 }] });
  jest.advanceTimersByTime(30);
  expect(document.body).toMatchSnapshot();
  domUtil.trigger('touchmove', { touches: [{ pageY: 120 }] });
  jest.advanceTimersByTime(30);
  expect(document.body).toMatchSnapshot();
  expect(mockCallback.mock.calls.length).toBe(0);

  domUtil.trigger('touchend', { touches: [{ pageY: 120 }] });
  jest.advanceTimersByTime(30);
  expect(document.body).toMatchSnapshot();
  expect(mockCallback.mock.calls.length).toBe(1);

  jest.useRealTimers();
});
