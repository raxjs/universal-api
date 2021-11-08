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
  Object.defineProperty(window, 'history', {
    value: globals.history,
  });
  globals.location = Object.defineProperty({}, 'href', {
    set: mockSetLocation,
  });

  const { push, back, reLaunch, switchTab, replace, go } = require('../src/index');

  await push({ url: '/a' });
  const state = { page_id: 1 };
  const title = '';
  expect(mockPushState.mock.calls).toEqual([[state, title, '/a']]);

  await back();
  expect(mockGo.mock.calls).toEqual([[-1]]);

  await replace({ url: '/a.html' });
  expect(mockReplaceState.mock.calls).toEqual([[null, null, '/a.html']]);

  mockGo.mockClear();
  await go({ step: -2 });
  expect(mockGo.mock.calls).toEqual([[-2]]);
});
