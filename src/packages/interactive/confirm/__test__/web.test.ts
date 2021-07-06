import { sleep, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('toast', async (globals) => {
  const { default: confirm } = require('../src/index');
  const res = confirm({
    title: 'abc',
    content: 'def',
  });
  expect(document.body).toMatchSnapshot();

  // hide confirm
  new DOMUtil('.__universal_confirm_confirm').trigger('click');
  await res;
  expect(document.body).toMatchSnapshot();

  await sleep(300); // await hide
});
