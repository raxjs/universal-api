import { sleep } from './util';

/**
 * 模拟 localStorage
 * @param globals
 */
export function mockLocalStorage(globals) {
  const localStorage = {
    _data: new Map<string, string>(),
    setItem: (key: string, value: any) => {
      localStorage._data.set(key, String(value));
    },
    getItem: (key: string): string => {
      return localStorage._data.get(key) ?? null;
    },
    removeItem: (key: string) => {
      localStorage._data.delete(key);
    },
    clear: () => {
      localStorage._data.clear();
    },
  };

  globals.localStorage = localStorage;
  Object.defineProperty(window, 'localStorage', {
    get() {
      return localStorage;
    },
  });
}

/**
 * 模拟 xhr 对象
 * @param globals
 */
export function mockXHR(globals) {
  const response = {
    status: 200,
    data: '',
    headers: '',
  };

  const mockOpen = jest.fn();
  const mockSend = jest.fn(async function (data) {
    await sleep(10);
    this.readyState = 4;
    this.status = response.status ?? 200;
    this.response = response.data || '';
    this.onreadystatechange?.();
    await sleep(10);
    this.onload?.();
  });
  const mockSetRequestHeader = jest.fn();
  globals.FormData = window.FormData;
  globals.XMLHttpRequest = class {
    open = mockOpen;
    send = mockSend;
    setRequestHeader = mockSetRequestHeader;
    getAllResponseHeaders = () => response.headers || '';
  };

  function setResponse(status = 200, data?: any, headers?: Record<string, string>) {
    response.status = status;
    response.data = data;
    if (headers) {
      response.headers = Object.keys(headers)
        .map((key) => {
          const value = headers[key];
          return `${key}: ${value}`;
        })
        .join('\r\n');
    } else {
      response.headers = '';
    }
  }

  return {
    mockOpen,
    mockSend,
    mockSetRequestHeader,
    setResponse,
  };
}
