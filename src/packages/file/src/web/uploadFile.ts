import { UploadOptions } from '../types';
import { normalize } from '../common';

function base64toFile(dataUrl: string, fileName = '') {
  const dataURLtoBlob = function (base64Data: string) {
    const arr = base64Data.split(',');
    let mimeStr = 'image/png';
    const mime = arr[0].match(/:(.*?);/);
    if (mime) {
      mimeStr = mime[1];
    }
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
      type: mimeStr,
    });
  };
  const blobToFile = function (theBlob: any, filename: string) {
    theBlob.lastModifiedDate = new Date();
    theBlob.name = filename;
    return theBlob;
  };

  const blob = dataURLtoBlob(dataUrl);
  const file = blobToFile(blob, fileName);
  return file;
}

function validateStatus(status: number) {
  return (status >= 200 && status < 300) || status === 304;
}

function uploadFile(param: UploadOptions) {
  // return new Promise((resolve, reject) => {
  const file = typeof param.filePath === 'string' ? base64toFile(param.filePath) : param.filePath;
  const body = new FormData();
  if (param.formData) {
    for (const key in param.formData) {
      if (Object.prototype.hasOwnProperty.call(param.formData, key)) {
        body.append(key, param.formData[key]);
      }
    }
  }
  body.append(param.fileName || 'file', file);
  const header = {
    Accept: 'application/json, text/plain, */*',
    ...param.header || {},
  };
    // initialize xhr
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (!xhr || xhr.readyState !== 4) {
      return;
    }
    // fail
    if (!validateStatus(xhr.status)) {
      param.fail && param.fail({ errMsg: '上传失败' });
      param.complete && param.complete({ errMsg: '上传失败' });
      return;
      // return reject(xhr.status);
    }
    // process response headers
    const headers = xhr.getAllResponseHeaders();
    const arr = headers.trim().split(/[\r\n]+/);
    const headerMap = {};
    arr.forEach((line) => {
      const parts = line.split(': ');
      const _header = parts.shift();
      const value = parts.join(': ');
      headerMap[_header as string] = value;
    });
    let data: any = xhr.response;
    try {
      data = JSON.parse(data);
    } catch (e) {
      // ignore
    }
    // success
    const result = {
      data,
      statusCode: xhr.status,
      header: headerMap,
    };
    param.success && param.success(result);
    param.complete && param.complete(result);
    // resolve(result);
  };
  // check if need add withCredentials
  if (!param.url.includes(window.location.host)) {
    xhr.withCredentials = true;
  }
  xhr.open('POST', param.url, true);
  Object.keys(header).forEach((key) => {
    xhr.setRequestHeader(key, String(header[key]));
  });
  // send request
  xhr.send(body);
  return { abort: () => {} };
  // });
}

export default normalize.upload(uploadFile);
