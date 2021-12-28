import { isAliContainer, noop, testPlatformAPI } from '@utils/__test__/util';
import { MockSelectorQueryImpl } from '@utils/__test__/createSelectorQuery';

testPlatformAPI('canvas', ['wechat', 'ali', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockSelectorQuery = new MockSelectorQueryImpl();
  const mockNodeRef = new MockSelectorQueryImpl();
  mockSelectorQuery.setExecResult([{ node: mockNodeRef.nodesRefContext }]);
  const mockCreateContext = jest.fn(() => ({ fillRect: noop }));

  if (isAliContainer(container)) {
    globals.my.createCanvasContext = mockCreateContext;
    globals.my.SDKVersion = '2.1.0';
  } else if (container === 'baidu') {
    globals.swan.createCanvasContext = mockCreateContext;
  } else {
    configAPI('createSelectorQuery', mockSelectorQuery.getMock('createSelectorQuery'));
  }

  const { createContext } = require('../src/index');
  await createContext({
    canvasId: 'abc',
    options: { alpha: true },
  });

  if (isAliContainer(container) || container === 'baidu') {
    expect(mockCreateContext.mock.calls).toEqual([['abc']]);
  } else {
    expect(mockSelectorQuery.getMock('select').mock.calls).toEqual([['#abc']]);
    expect(mockNodeRef.getMock('getContext').mock.calls).toEqual([['2d', { alpha: true }]]);
  }
});
