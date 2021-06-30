import { noop, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('canvas', ['wechat', 'ali', 'bytedance'], async (container, globals) => {
  const mockCreateContext = jest.fn(() => ({ fillRect: noop }));
  const mockNodeSelect = jest.fn(() => {
    const getNodeExec = () => ({
      exec: (cb) => {
        cb([{ node: { getContext: mockCreateContext } }]);
      },
    });
    if (container === 'bytedance') {
      return { node: getNodeExec };
    } else {
      return { fields: getNodeExec };
    }
  });
  const mockCreateSelectorQuery = jest.fn(() => ({
    select: mockNodeSelect,
  }));

  if (container === 'wechat') {
    globals.wx.createSelectorQuery = mockCreateSelectorQuery;
  } else if (container === 'ali') {
    globals.my.createCanvasContext = mockCreateContext;
  } else if (container === 'bytedance') {
    globals.tt.createSelectorQuery = mockCreateSelectorQuery;
  }

  const { createContext } = require('../src/index');
  await createContext({
    canvasId: 'abc',
    options: { alpha: true },
  });

  if (container === 'ali') {
    expect(mockCreateContext.mock.calls).toEqual([['abc']]);
  } else {
    expect(mockNodeSelect.mock.calls).toEqual([['#abc']]);
    expect(mockCreateContext.mock.calls).toEqual([['2d', { alpha: true }]]);
  }
});
