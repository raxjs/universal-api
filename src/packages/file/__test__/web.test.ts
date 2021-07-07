import { sleep, testWebAPI } from '@/utils/__test__/util';

testWebAPI('file', async (globals) => {
  const {
    openDocument,
    removeSaved,
    upload,
    save,
    getSavedList,
    getSavedInfo,
    getInfo,
    download,
  } = require('../src/index');

  await expect(openDocument()).rejects.toThrowError(/暂不支持/);
  await expect(removeSaved()).rejects.toThrowError(/暂不支持/);
  await expect(save()).rejects.toThrowError(/暂不支持/);
  await expect(getSavedList()).rejects.toThrowError(/暂不支持/);
  await expect(getSavedInfo()).rejects.toThrowError(/暂不支持/);
  await expect(getSavedInfo()).rejects.toThrowError(/暂不支持/);
  await expect(getInfo()).rejects.toThrowError(/暂不支持/);
  await expect(download()).rejects.toThrowError(/暂不支持/);


  const mockOpen = jest.fn();
  const mockSend = jest.fn(async function (data) {
    await sleep(10);
    this.readyState = 2;
    this.onreadystatechange?.();
    await sleep(10);
    this.onload?.();
  });
  const mockSetRequestHeader = jest.fn();
  const mockGetAllResponseHeaders = jest.fn(() => 'x-aa: 1\r\nx-bb: 2');
  globals.FormData = window.FormData;
  globals.XMLHttpRequest = class {
    open = mockOpen;
    send = mockSend;
    setRequestHeader = mockSetRequestHeader;
    getAllResponseHeaders = mockGetAllResponseHeaders;
  };

  const file = Buffer.alloc(100);
  await upload({
    url: 'https://xxx-test.com',
    filePath: file,
    formData: {
      foo: 'bar',
    },
    header: {
      a: 'aa',
      b: 'bb',
    },
  });
  expect(mockOpen.mock.calls).toEqual([['POST', 'https://xxx-test.com', true]]);
  expect(mockSend.mock.calls[0][0].get('foo')).toBe('bar');
  expect(mockSend.mock.calls[0][0].get('file')).toBe(file.toString());
  expect(mockSetRequestHeader.mock.calls).toEqual([
    ['Accept', 'application/json, text/plain, */*'],
    ['a', 'aa'],
    ['b', 'bb'],
  ]);
});
