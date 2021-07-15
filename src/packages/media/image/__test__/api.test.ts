import { createPromisifyImpl, isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('image', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals, configAPI) => {
  const mockChooseImage = jest.fn(createPromisifyImpl());
  const mockCompressImage = jest.fn(createPromisifyImpl());
  const mockGetImageInfo = jest.fn(createPromisifyImpl());
  const mockPreviewImage = jest.fn(createPromisifyImpl());
  const mockSaveImage = jest.fn(createPromisifyImpl());
  configAPI('chooseImage', mockChooseImage);
  configAPI('compressImage', mockCompressImage);
  configAPI('getImageInfo', mockGetImageInfo);
  configAPI('previewImage', mockPreviewImage);
  configAPI('previewImage', mockPreviewImage);

  if (isAliContainer(container)) {
    configAPI('saveImage', mockSaveImage);
  } else {
    configAPI('saveImageToPhotosAlbum', mockSaveImage);
  }

  const { chooseImage, compressImage, getImageInfo, previewImage, saveImage } = require('../src/index');

  await chooseImage({ count: 2 });
  expect(mockChooseImage.mock.calls.length).toBe(1);
  expect(mockChooseImage.mock.calls[0][0].count).toBe(2);

  await compressImage({ src: 'abc' });
  expect(mockCompressImage.mock.calls.length).toBe(1);
  expect(mockCompressImage.mock.calls[0][0].src).toBe('abc');

  await getImageInfo({ src: 'def' });
  expect(mockGetImageInfo.mock.calls.length).toBe(1);
  expect(mockGetImageInfo.mock.calls[0][0].src).toBe('def');

  await previewImage({ urls: ['a', 'b'] });
  expect(mockPreviewImage.mock.calls.length).toBe(1);
  expect(mockPreviewImage.mock.calls[0][0].urls).toEqual(['a', 'b']);

  await saveImage({ url: 'ghi' });
  expect(mockSaveImage.mock.calls.length).toBe(1);
  expect(mockSaveImage.mock.calls[0][0].url).toBe('ghi');
});
