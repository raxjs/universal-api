import { UploadHeadersReceivedCallback, UploadOptions, UploadProgressUpdateCallback, UploadTask } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

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

function getHeaderMap(xhr: XMLHttpRequest) {
  const headers = xhr.getAllResponseHeaders();
  const arr = headers.trim().split(/[\r\n]+/);
  const headerMap: { [x: string]: string } = {};
  arr.forEach((line) => {
    const parts = line.split(': ');
    const _header = parts.shift();
    const value = parts.join(': ');
    headerMap[_header as string] = value;
  });
  return headerMap;
}

function uploadFile(param: UploadOptions): UploadTask {
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
  const headersReceivedCallback: UploadHeadersReceivedCallback[] = [];
  xhr.onreadystatechange = () => {
    // header received
    if (xhr && xhr.readyState === 2 && headersReceivedCallback.length > 0) {
      const headers = getHeaderMap(xhr);
      headersReceivedCallback.forEach(x => x(headers));
    }
  };
  // Success
  xhr.onload = () => {
    const result = {
      data: xhr.response,
      statusCode: xhr.status,
      header: getHeaderMap(xhr),
    };
    param.success && param.success(result);
    param.complete && param.complete(result);
  }
  // Errors
  xhr.onerror = () => {
    param.fail && param.fail({ errMsg: 'uploadFile:fail error' });
    param.complete && param.complete({ errMsg: 'uploadFile:fail error' });
  }
  xhr.onabort = () => {
    param.fail && param.fail({ errMsg: 'uploadFile:fail abort' });
    param.complete && param.complete({ errMsg: 'uploadFile:fail abort' });
  }
  // Progress event
  const progressCallback: UploadProgressUpdateCallback[] = [];
  xhr.onprogress = (evt) => {
    if (progressCallback.length === 0) {
      return;
    }
    let progress = 0;
    let totalBytesSent = 0;
    let totalBytesExpectedToSend = 0;
    if (evt.lengthComputable) {
      totalBytesSent = evt.loaded;
      totalBytesExpectedToSend = evt.total;
      progress = Math.floor(100 * evt.loaded / evt.total);
    }
    progressCallback.forEach(x => x(progress, totalBytesSent, totalBytesExpectedToSend));
  };
  // check if need add withCredentials
  if (typeof param.withCredentials === 'undefined') {
    if (param.url.indexOf(window.location.host) === -1) {
      xhr.withCredentials = true;
    }
  } else {
    xhr.withCredentials = param.withCredentials;
  }
  xhr.open('POST', param.url, true);
  for (const headerKey in header) {
    if (Object.prototype.hasOwnProperty.call(header, headerKey)) {
      xhr.setRequestHeader(headerKey, String(header[headerKey]));
    }
  }
  // timeout
  if (param.timeout) {
    xhr.timeout = param.timeout;
    xhr.ontimeout = () => {
      param.fail && param.fail({ errMsg: 'uploadFile:fail timeout' });
      param.complete && param.complete({ errMsg: 'uploadFile:fail timeout' });
    };
  }
  // send request
  xhr.send(body);
  return {
    abort() {
      xhr.abort();
    },
    onProgressUpdate(cb) {
      progressCallback.push(cb);
    },
    offProgressUpdate(cb) {
      if (progressCallback.indexOf(cb) !== -1) {
        progressCallback.splice(progressCallback.indexOf(cb), 1);
      }
    },
    onHeadersReceived(cb) {
      headersReceivedCallback.push(cb);
    },
    offHeadersReceived(cb) {
      if (headersReceivedCallback.indexOf(cb) !== -1) {
        headersReceivedCallback.splice(headersReceivedCallback.indexOf(cb), 1);
      }
    }
  };
}

export default normalize.upload(uploadFile, CONTAINER_NAME.WEB);
