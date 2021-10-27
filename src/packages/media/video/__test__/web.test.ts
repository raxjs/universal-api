import { testWebAPI } from '@/utils/__test__/util';
import { mockUserChooseMedia } from '@/utils/__test__/bom';

testWebAPI('video', async (globals) => {
  const originalRandom = Math.random;
  let _r = 0;
  Math.random = () => (++_r) / 1e8; // mock random
  const { chooseMedia, chooseVideo } = require('../src/index');

  chooseMedia();
  expect(document.body).toMatchSnapshot();
  await mockUserChooseMedia();
  expect(document.body).toMatchSnapshot();

  chooseVideo();
  expect(document.body).toMatchSnapshot();
  await mockUserChooseMedia();
  expect(document.body).toMatchSnapshot();

  // eslint-disable-next-line require-atomic-updates
  Math.random = originalRandom;
});
