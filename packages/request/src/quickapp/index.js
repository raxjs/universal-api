import fetch from '@system.fetch';

function json2string(obj) {
  try {
    return JSON.stringify(obj);
  } catch (e) {
    return obj || '';
  }
}

export default function request(params) {
  if (!params.url || params.url === '') {
    throw 'lack of url';
    return;
  }

  let { url, method, data = {}, dataType = 'json', headers } = options;
  return new Promise((resolve, reject) => {
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