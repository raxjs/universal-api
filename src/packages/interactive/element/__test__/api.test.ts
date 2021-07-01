import { testPlatformAPI } from '@utils/__test__/util';
import { MockSelectorQueryImpl } from '@utils/__test__/createSelectorQuery';

testPlatformAPI('element', ['wechat', 'ali', 'bytedance'], async (container, globals, configAPI) => {
  const mockSelectorQuery = new MockSelectorQueryImpl([[{
    scrollLeft: 1,
    scrollTop: 2,
  }]]);
  configAPI('createSelectorQuery', mockSelectorQuery.getMock('createSelectorQuery'));

  const { getScrollOffset, getBoundingClientRect } = require('../src/index');

  let res = await getScrollOffset('#abc');
  expect(mockSelectorQuery.getMock('selectAll').mock.calls).toEqual([['#abc']]);
  expect(res).toEqual([{ scrollLeft: 1, scrollTop: 2 }]);

  mockSelectorQuery.clear();
  mockSelectorQuery.setExecResult([[{ left: 1, right: 2, top: 3, bottom: 4 }]]);
  res = await getBoundingClientRect('#def');
  expect(mockSelectorQuery.getMock('selectAll').mock.calls).toEqual([['#def']]);
  expect(res).toEqual([{ left: 1, right: 2, top: 3, bottom: 4 }]);
});
