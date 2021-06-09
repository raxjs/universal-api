import { normalizeSet } from '../common';
import { PARAMS } from '../types';
import { CONTAINER_NAME } from '@utils/constant';

const setClipboard = normalizeSet((args: PARAMS) => {
  const { text = '', success = () => {}, fail = () => {}, complete = () => {} } = args || {};
  let textArea;

  const isOS = () => {
    return navigator.userAgent.match(/ipad|iphone/i);
  };

  const createTextArea = () => {
    textArea = document.createElement('textArea');
    textArea.value = text;
    document.body.appendChild(textArea);
  };

  const selectText = () => {
    let range;
    let selection;

    if (isOS()) {
      range = document.createRange();
      range.selectNodeContents(textArea);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.select();
    }
  };

  const copyToClipboard = () => {
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  try {
    createTextArea();
    selectText();
    copyToClipboard();
    success(text);
    complete(text);
    return text;
  } catch (error) {
    fail(error);
    complete(text);
  }
}, CONTAINER_NAME.WEB);

export default setClipboard;
