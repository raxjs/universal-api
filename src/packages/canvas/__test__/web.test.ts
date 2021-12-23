import { sleep, noop, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('canvas', async (globals) => {
  const mockGetContext = jest.fn().mockImplementation(() => {
    return {
      draw: undefined,
    };
  });
  document.getElementById = jest.fn()
    .mockImplementationOnce(() => {
      return {
        getContext: mockGetContext,
      };
    })
    .mockImplementationOnce(() => undefined);

  const { createContext } = require('../src/index');
  await createContext({
    canvasId: 'abc',
    options: { alpha: true },
  });
  expect(mockGetContext.mock.calls).toEqual([['2d', { alpha: true }]]);

  expect(
    createContext({
      canvasId: 'abc',
      options: { alpha: true },
    }),
  ).rejects.toThrow(new Error('The canvas node may not exist.'));
});
