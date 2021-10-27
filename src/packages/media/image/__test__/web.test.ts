import { sleep, testWebAPI } from '@/utils/__test__/util';
import { mockUserChooseMedia, mockRandomWrapper } from '@/utils/__test__/bom';

testWebAPI('image', async (globals) => {
  await mockRandomWrapper(async () => {
    const { chooseImage, compressImage, getImageInfo, previewImage, saveImage } = require('../src/index');

    chooseImage({});
    expect(document.body).toMatchSnapshot();
    await mockUserChooseMedia();
    expect(document.body).toMatchSnapshot();

    previewImage({ urls: ['a.png', 'b.png'] });
    expect(document.body).toMatchSnapshot();

    globals.Image = class {
      width: number;
      height: number;
      onload: () => any;

      constructor() {
        setTimeout(() => {
          this.width = 100;
          this.height = 200;
          // 模拟触发 onload
          this.onload?.();
        }, 20);
      }
    };
    const res = await getImageInfo({ src: 'c.png' });
    expect(res).toEqual({
      width: 100,
      height: 200,
      path: 'c.png',
    });

    expect(() => compressImage()).toThrow(/compressImage不支持/);
    expect(() => saveImage()).toThrow(/saveImage不支持/);
  });
});
