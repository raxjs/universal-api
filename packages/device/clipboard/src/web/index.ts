import { initApiSet, initApiGet } from '../common';
import { PARAMS } from '../types';

export const setClipboard = initApiSet((args: PARAMS) => {
  const {text = '', success = () => {}, fail = () => {}, complete = () => {}} = args || {};
  const input = document.createElement('input');
  input.setAttribute('readonly', 'readonly');
  input.setAttribute('value', text);
  input.style.position = 'fixed';
  input.style.height = '0px';
  document.body.appendChild(input);
  input.focus();
  input.setSelectionRange(0, -1);
  const removeInput = (): void => {
    document.body.removeChild(input);
  };
  try {
    if (document.execCommand('copy')) {
      removeInput();
      success(text);
      complete(text);
      return text;
    } else {
      removeInput();
      fail();
    }
  } catch (error) {
    removeInput();
    fail();
  }
});
export const getClipboard = initApiGet(() => {
  throw new Error('@uni/apis: getClipboard不支持');
});
export default {
  setClipboard,
  getClipboard
};
