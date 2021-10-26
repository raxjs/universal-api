import { testWebAPI } from '@/utils/__test__/util';

testWebAPI('navigate', async (globals) => {
  const mockSetLocation = jest.fn();
  const mockGo = jest.fn();
  const mockBack = jest.fn();
  const mockForward = jest.fn();
  const mockPushState = jest.fn();
  const mockReplaceState = jest.fn();

  globals.history = {
    ...window.history,
    go: mockGo,
    back: mockBack,
    forward: mockForward,
    pushState: mockPushState,
    replaceState: mockReplaceState,
  };
  globals.location = Object.defineProperty({}, 'href', {
    set: mockSetLocation,
  });

  const { push, back, reLaunch, switchTab, replace, go } = require('../src/index');

  await push({ url: '/a' });
  expect(mockSetLocation.mock.calls).toEqual([['/a']]);

  await back();
  expect(mockGo.mock.calls).toEqual([[-1]]);

  await replace({ url: '/d' });
  expect(mockReplaceState.mock.calls).toEqual([['', '', '/d']]);

  mockGo.mockClear();
  await go(-2);
  expect(mockGo.mock.calls).toEqual([[-2]]);
});
