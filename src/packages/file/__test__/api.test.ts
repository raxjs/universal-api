import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('file', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockUpload = jest.fn();
  const mockDownload = jest.fn();
  const mockGetInfo = jest.fn();
  const mockGetSavedInfo = jest.fn();
  const mockGetSavedList = jest.fn();
  const mockSave = jest.fn();
  const mockRemoveSaved = jest.fn();
  const mockOpenDocument = jest.fn();

  if (container === 'wechat') {
    globals.wx.uploadFile = mockUpload;
    globals.wx.downloadFile = mockDownload;
    globals.wx.getFileInfo = mockGetInfo;
    globals.wx.getSavedFileList = mockGetSavedList;
    globals.wx.saveFile = mockSave;
    globals.wx.removeSavedFile = mockRemoveSaved;
    globals.wx.openDocument = mockOpenDocument;
  } else if (container === 'dingtalk') {
    globals.dd.uploadFile = mockUpload;
    globals.dd.downloadFile = mockDownload;
    globals.dd.getFileInfo = mockGetInfo;
    globals.dd.getSavedFileInfo = mockGetSavedInfo;
    globals.dd.getSavedFileList = mockGetSavedList;
    globals.dd.saveFile = mockSave;
    globals.dd.removeSavedFile = mockRemoveSaved;
    globals.dd.openDocument = mockOpenDocument;
  } else if (container === 'ali') {
    globals.my.uploadFile = mockUpload;
    globals.my.downloadFile = mockDownload;
    globals.my.getFileInfo = mockGetInfo;
    globals.my.getSavedFileInfo = mockGetSavedInfo;
    globals.my.getSavedFileList = mockGetSavedList;
    globals.my.saveFile = mockSave;
    globals.my.removeSavedFile = mockRemoveSaved;
    globals.my.openDocument = mockOpenDocument;
  } else if (container === 'bytedance') {
    globals.tt.uploadFile = mockUpload;
    globals.tt.downloadFile = mockDownload;
    globals.tt.getFileInfo = mockGetInfo;
    globals.tt.getSavedFileList = mockGetSavedList;
    globals.tt.saveFile = mockSave;
    globals.tt.removeSavedFile = mockRemoveSaved;
    globals.tt.openDocument = mockOpenDocument;
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
  if (container === 'ali' || container === 'dingtalk') {
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
