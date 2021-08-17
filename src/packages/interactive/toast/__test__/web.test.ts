import { sleep, testWebAPI } from '@/utils/__test__/util';

testWebAPI('toast', async () => {
  const { showToast, hideToast, show, hide } = require('../src/index');
  await showToast({
    content: 'abc',
    type: 'success',
    duration: 100,
  });
  expect(document.body).toMatchSnapshot();

  await hideToast();
  await sleep(500);
  expect(document.body).toMatchSnapshot();

  await show({
    content: 'def',
    type: 'fail',
    duration: 100,
  });
  expect(document.body).toMatchSnapshot();

  await hide();
  await sleep(500);
  expect(document.body).toMatchSnapshot();
});
