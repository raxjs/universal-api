import { testWebAPI } from '@/utils/__test__/util';
import { mockXHR } from '@/utils/__test__/bom';

testWebAPI('request', async (globals) => {
  const { mockSend, mockOpen, setResponse } = mockXHR(globals);
  Object.defineProperty(window, 'setTimeout', {
    value: setTimeout,
  });

  const { default: request } = require('../src/index');

  const { data } = await new Promise<any>((resolve) => {
    setResponse(200, 'hello');
    request({
      url: 'https://xxx-test.com',
      data: {
        a: 1,
        b: 'abc',
      },
      method: 'POST',
      success: (x) => {
        resolve(x);
      },
    });
  });
  expect(mockOpen.mock.calls).toEqual([['POST', 'https://xxx-test.com', true]]);
  expect(mockSend.mock.calls[0][0]).toBe(
    JSON.stringify({
      a: 1,
      b: 'abc',
    }),
  );
  expect(data).toBe('hello');
});
