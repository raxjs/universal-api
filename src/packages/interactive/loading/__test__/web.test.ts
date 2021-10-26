import { sleep, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('loading', async () => {
  const { showLoading, hideLoading } = require('../src/index');
  await showLoading({
    content: 'abc',
  });
  await sleep(300); // await show
  expect(document.body).toMatchSnapshot();

  await hideLoading();
  await sleep(300); // await hide
  expect(document.body).toMatchSnapshot();
});
