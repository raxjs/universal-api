import request from '../../index';
import { DATA_TYPE } from '../../types';

const mockXMLHttpRequestFn = jest.fn();
// eslint-disable-next-line
(global as any).XMLHttpRequest = mockXMLHttpRequestFn;

jest.mock('universal-env', () => {
  return {
    isWeb: true
  };
});

const XMLHttpRequestClass = (options: {
  timeout?: number;
  status?: number;
}) => {
  const theClass = {
    allData: {'requestHeaders': {}, url: '', method: '', requestData: ''},
    status: options.status || 200,
    readyState: 4,
    timeout: 0,
    response: '',
    responseType: '',
    onreadystatechange() {},
    setRequestHeader(key, value) {
      theClass.allData.requestHeaders[key] = value;
    },
    open(method, url) {
      theClass.allData.url = url;
      theClass.allData.method = method;
    },
    send(requestData) {
      theClass.allData.requestData = requestData;
      theClass.response = this.responseType === 'text' ? JSON.stringify(this.allData) : this.allData;
      setTimeout(() => {
        theClass.onreadystatechange();
      }, options.timeout || 0);
    },
    abort() {},
    getAllResponseHeaders() {
      return 'content-encoding: gzip\r\n';
    }
  };

  return theClass;
};

describe('Request success', () => {
  mockXMLHttpRequestFn.mockImplementationOnce(XMLHttpRequestClass.bind(this, {}));
  test('Options', () => {
    return request({
      url: 'http://request.com',
      method: 'POST',
      headers: {
        'ADD': 'a'
      },
      data: {
        test: '1'
      },
      timeout: 5000,
      dataType: DATA_TYPE.text
    })
      .then((data) => {
        expect(data.status).toEqual(200);
        expect(data.headers).toEqual({ 'content-encoding': 'gzip' });
        expect(JSON.parse(data.data)).toEqual( {
          requestHeaders: {
            'ADD': 'a',
            'Accept': 'application/json, text/plain, */*'
          },
          url: 'http://request.com',
          method: 'POST',
          requestData: '{\"test\":\"1\"}'
        });
      })
      .catch((error) => {
        expect(error).toBeNull();
      });
  });
});


describe('Request fail', () => {
  mockXMLHttpRequestFn.mockImplementationOnce(XMLHttpRequestClass.bind(this, {status: 500}));
  test('Abort', () => {
    return request({
      url: 'http://request.com',
    }).then(data => {
      expect(data).toBeNull();
    }).catch((error) => {
      expect(error.code).toEqual(0);
    });
  });

  mockXMLHttpRequestFn.mockImplementationOnce(XMLHttpRequestClass.bind(this, {status: 200, timeout: 10000}));
  test('Timeout', () => {
    return request({
      url: 'http://request.com',
      timeout: 30
    }).then(data => {
      expect(data).toBeNull();
    }).catch((error) => {
      expect(error.code).toEqual(1);
    });
  });
});

