// eslint-disable-next-line
(global as any).__weex_require__ = (path) => {
  return require(path);
};
import request from '../../index';
import { DATA_TYPE, RequestOptions } from '../../types';

jest.mock('universal-env', () => {
  return {
    isWeex: true,
  };
});

const mockRequestFn = jest.fn();
jest.mock('@weex-module/stream', () => {
  return {
    fetch: mockRequestFn
  };
}, {virtual: true});

describe('Request success', () => {
  mockRequestFn.mockImplementationOnce((params, cb) => cb({
    ok: true,
    data: params.type === 'text' ? JSON.stringify(params) : params,
    status: 200,
    headers: { 'content-encoding': 'gzip' }
  }));

  test('Options', () => {
    const requestOptions = {
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
    };
    return request(requestOptions as RequestOptions)
      .then((data) => {
        expect(data.status).toEqual(200);
        expect(data.headers).toEqual({ 'content-encoding': 'gzip' });
        const responseData = JSON.parse(data.data);
        expect(responseData.method).toEqual(requestOptions.method);
        expect(responseData.url).toEqual(requestOptions.url);
        expect(responseData.data).toEqual(requestOptions.data);
        expect(responseData.timeout).toEqual(requestOptions.timeout);
        expect(responseData.dataType).toEqual(requestOptions.dataType);
      })
      .catch((error) => {
        expect(error).toBeNull();
      });
  });

  mockRequestFn.mockImplementationOnce((params, cb) => cb({
    ok: true,
    data: params,
    status: 200
  }));
  test('application/x-www-form-urlencoded header', () => {
    const requestOptions = {
      url: 'http://request.com',
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        test: '1'
      }
    };
    return request(requestOptions as RequestOptions)
      .then((data) => {
        expect(data.data.url).toEqual('http://request.com?test=1');
      })
      .catch((error) => {
        expect(error).toBeNull();
      });
  });
});

describe('Request fail', () => {
  mockRequestFn.mockImplementationOnce((params, cb) => cb({
    ok: false,
    status: 500,
    headers: { 'content-encoding': 'gzip' }
  }));

  test('Options', () => {
    const requestOptions = {
      url: 'http://request.com',
      method: 'POST'
    };
    return request(requestOptions as RequestOptions)
      .then((data) => {
        expect(data).toBeNull();
      })
      .catch((error) => {
        expect(error.code).toEqual(0);
        expect(JSON.parse(error.message).status).toEqual(500);
      });
  });
});
