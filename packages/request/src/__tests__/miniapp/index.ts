import request from '../../index';
import { DATA_TYPE, RequestOptions } from '../../types';

jest.mock('universal-env', () => {
  return {
    isWeb: false,
    isWeex: false,
    isWechatApp: false,
    isMiniApp: true
  };
});

const mockRequestFn = jest.fn();

// eslint-disable-next-line
(global as any).my = {
  request: mockRequestFn
};

describe('Request success', () => {
  mockRequestFn.mockImplementationOnce((options) => {
    options.success({
      data: options.dataType === DATA_TYPE.text ? JSON.stringify(options) : options,
      status: 200,
      headers: { 'content-encoding': 'gzip' }
    });
  });

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
});

describe('Request fail', () => {
  mockRequestFn.mockImplementationOnce((options) => {
    options.fail({
      data: options.dataType === DATA_TYPE.text ? JSON.stringify(options) : options,
      status: 200,
      headers: { 'content-encoding': 'gzip' }
    });
  });

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
        expect(JSON.parse(error.message).data.method).toEqual(requestOptions.method);
      });
  });
});
