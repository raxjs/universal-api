import { testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('makePhoneCall', async () => {
  /* eslint-disable @typescript-eslint/dot-notation */
  const mockClick = jest.fn();

  // mock for `element.click` function, to avoid problem
  window.HTMLElement.prototype['click'] = mockClick;

  const { default: makePhoneCall } = require('../src/index');
  const p = makePhoneCall({
    phoneNumber: '123',
  });

  const util = new DOMUtil('a');

  expect(util.getComputedStyle().display).toBe('none');
  expect(util.element.getAttribute('href')).toBe('tel:123');
  expect(document.body).toMatchSnapshot();

  await p;
  expect(mockClick.mock.calls.length).toBe(1);
  expect(document.body).toMatchSnapshot();

  /* eslint-enable @typescript-eslint/dot-notation */
});
