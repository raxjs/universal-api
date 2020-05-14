import { isQuickApp } from 'universal-env';
import otherModule from '../index';

let exportModule;

function json2string(obj) {
  try {
    return JSON.stringify(obj);
  } catch (e) {
    return obj || '';
  }
}

function request(params) {
  if (!params.url || params.url === '') {
    throw 'lack of url';
    return;
  }

  let { url, method, data = {}, dataType = 'json', headers } = params;
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fetch = require('@system.fetch');
    fetch.fetch({
      url: url,
      responseType: dataType,
      method: method,
      data: data,
      header: headers,
      success: function(response) {
        resolve(response);
      },
      fail: function(data, code) {
        reject({
          code,
          message: json2string(data)
        });
      }
    });
  });
}

if (isQuickApp) {
  exportModule = request;
} else {
  exportModule = otherModule;
}

export default exportModule;
