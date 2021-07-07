import { sleep, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('element', async () => {
  const nodes = [
    document.createElement('div'),
    document.createElement('span'),
  ];
  const mockQuerySelectorAll = jest.fn(() => nodes);
  document.querySelectorAll = mockQuerySelectorAll as any;

  const { getScrollOffset, getBoundingClientRect } = require('../src/index');
  await expect(getScrollOffset()).resolves.toEqual([
    {
      scrollTop: expect.any(Number),
      scrollLeft: expect.any(Number),
    },
    {
      scrollTop: expect.any(Number),
      scrollLeft: expect.any(Number),
    },
  ]);

  await expect(getBoundingClientRect()).resolves.toEqual(
    nodes.map((node) => node.getBoundingClientRect()),
  );
});
