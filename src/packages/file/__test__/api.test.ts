import { isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('file', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals, configAPI) => {
  const mockUpload = jest.fn();
  const mockDownload = jest.fn();
  const mockGetInfo = jest.fn();
  const mockGetSavedInfo = jest.fn();
  const mockGetSavedList = jest.fn();
  const mockSave = jest.fn();
  const mockRemoveSaved = jest.fn();
  const mockOpenDocument = jest.fn();

  configAPI('uploadFile', mockUpload);
  configAPI('downloadFile', mockDownload);
  configAPI('getFileInfo', mockGetInfo);
  configAPI('getSavedFileList', mockGetSavedList);
  configAPI('saveFile', mockSave);
  configAPI('removeSavedFile', mockRemoveSaved);
  configAPI('openDocument', mockOpenDocument);

  if (container === 'dingtalk') {
    globals.dd.getSavedFileInfo = mockGetSavedInfo;
  } else if (container === 'ali') {
    globals.my.getSavedFileInfo = mockGetSavedInfo;
  }

  const {
    upload,
    download,
    getInfo,
    getSavedInfo,
    getSavedList,
    save,
    removeSaved,
    openDocument,
  } = require('../src/index');

  upload();
  expect(mockUpload.mock.calls.length).toBe(1);

  download();
  expect(mockDownload.mock.calls.length).toBe(1);

  getInfo();
  expect(mockGetInfo.mock.calls.length).toBe(1);

  mockGetInfo.mockClear();
  getSavedInfo();
  if (isAliContainer(container)) {
    expect(mockGetSavedInfo.mock.calls.length).toBe(1);
  } else {
    expect(mockGetInfo.mock.calls.length).toBe(1);
  }

  getSavedList();
  expect(mockGetSavedList.mock.calls.length).toBe(1);

  save();
  expect(mockSave.mock.calls.length).toBe(1);

  removeSaved();
  expect(mockRemoveSaved.mock.calls.length).toBe(1);

  openDocument();
  expect(mockOpenDocument.mock.calls.length).toBe(1);
});
