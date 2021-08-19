import { sleep, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('alert', async () => {
  const { default: alert } = require('../src/index');
  const res = alert({
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
