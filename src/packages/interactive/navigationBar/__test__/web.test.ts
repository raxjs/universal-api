import { sleep, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('confirm', async () => {
  const { setNavigationBarTitle } = require('../src/index');

  await setNavigationBarTitle({ title: 'abc' });
  expect(document).toMatchSnapshot();
});
