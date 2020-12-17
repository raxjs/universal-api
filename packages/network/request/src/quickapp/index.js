function request(params) {
  if (!params.url || params.url === '') {
    throw 'lack of url';
    return;
  }
  let { url, method, data = {}, dataType = 'json', headers, success, fail, complete, onSuccess, onFail, onComplete } = params;
  // return new Promise((resolve, reject) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fetch = require('@system.fetch');
  fetch.fetch({
    url: url,
    responseType: dataType,
    method: method,
    data: data,
    header: headers,
    success: function(res) {
      success && success(res);
      onSuccess && onSuccess(res);
    },
    fail: function(res) {
      fail && fail(res);
      onFail && onFail(res);
    },
    complete(res) {
      complete && complete(res);
      onComplete && onComplete(res);
    }
  });
  // });
}

export default request;
