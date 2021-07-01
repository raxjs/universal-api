import { isAliContainer, noop, testPlatformAPI } from '@utils/__test__/util';
import { MockSelectorQueryImpl } from '@utils/__test__/createSelectorQuery';

testPlatformAPI('canvas', ['wechat', 'ali', 'bytedance'], async (container, globals) => {
  const mockSelectorQuery = new MockSelectorQueryImpl();
  const mockNodeRef = new MockSelectorQueryImpl();
  mockSelectorQuery.setExecResult([{ node: mockNodeRef.nodesRefContext }]);
  const mockCreateContext = jest.fn(() => ({ fillRect: noop }));

  if (container === 'wechat') {
    globals.wx.createSelectorQuery = mockSelectorQuery.getMock('createSelectorQuery');
  } else if (container === 'ali') {
    globals.my.createCanvasContext = mockCreateContext;
  } else if (container === 'bytedance') {
    globals.tt.createSelectorQuery = mockSelectorQuery.getMock('createSelectorQuery');
  }

  const { createContext } = require('../src/index');
  await createContext({
    canvasId: 'abc',
    options: { alpha: true },
  });

  if (isAliContainer(container)) {
    expect(mockCreateContext.mock.calls).toEqual([['abc']]);
  } else {
    expect(mockSelectorQuery.getMock('select').mock.calls).toEqual([['#abc']]);
    expect(mockNodeRef.getMock('getContext').mock.calls).toEqual([['2d', { alpha: true }]]);
  }
});
