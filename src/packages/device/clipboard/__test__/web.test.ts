/**
 * @jest-environment jsdom
 */

import { sleep, noop, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('clipboard', async (globals) => {
  document.execCommand = jest.fn();
  const mockExecCommand = jest.spyOn(document, 'execCommand');

  const { getClipboard, setClipboard } = require('../src/index');

  expect(getClipboard).toThrowError(new Error('Uni API：getClipboard暂不支持'));

  let text;
  const completeFn = (res) => { text = res; return text; };

  setClipboard({ text: 'abc', complete: completeFn });
  expect(mockExecCommand).toHaveBeenCalled();
  expect(mockExecCommand.mock.calls[0]).toEqual(['copy']);
  expect(text).toBe('abc');

  globals.userAgent = jest.spyOn(navigator, 'userAgent', 'get');
  globals.userAgent.mockReturnValue('ipad');

  setClipboard({ text: 'cba', complete: completeFn });
  expect(mockExecCommand.mock.calls[1]).toEqual(['copy']);
  expect(text).toBe('cba');
});
