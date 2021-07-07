import { sleep, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('actionSheet', async () => {
  const { showActionSheet } = require('../src/index');
  let res = showActionSheet({
    itemList: ['aaa', 'bbb'],
  });
  expect(document.body).toMatchSnapshot();

  // select item
  new DOMUtil('.__universal_actionsheet_item', 1).trigger('click');
  await expect(res).resolves.toEqual({ tapIndex: 1 });
  expect(document.body).toMatchSnapshot();

  // click cancel
  res = showActionSheet({
    itemList: ['ccc', 'ddd'],
  });
  expect(document.body).toMatchSnapshot();
  new DOMUtil('.__universal_actionsheet_cancel').trigger('click');
  await expect(res).resolves.toEqual({ tapIndex: -1 });
  expect(document.body).toMatchSnapshot();

  // click mask
  res = showActionSheet({
    itemList: ['eee', 'fff'],
  });
  expect(document.body).toMatchSnapshot();
  new DOMUtil('.__universal_actionsheet_mask').trigger('click');
  await expect(res).resolves.toEqual({ tapIndex: -1 });
  expect(document.body).toMatchSnapshot();

  // await remove
  await sleep(300);
});
