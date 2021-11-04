import { testWebAPI } from '@/utils/__test__/util';
import { mockRandomWrapper, mockUserChooseMedia } from '@/utils/__test__/bom';

testWebAPI('video', async (globals) => {
  await mockRandomWrapper(async () => {
    const { chooseMedia, chooseVideo } = require('../src/index');

    chooseMedia({});
    expect(document.body).toMatchSnapshot();
    await mockUserChooseMedia();
    expect(document.body).toMatchSnapshot();

    chooseVideo({});
    expect(document.body).toMatchSnapshot();
    await mockUserChooseMedia();
    expect(document.body).toMatchSnapshot();
  });
});
