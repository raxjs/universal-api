import { normalizeSet } from '../common';
import { PARAMS } from '../types';
import { CONTAINER_NAME } from '@utils/constant';

const setClipboard = normalizeSet((args: PARAMS) => {
  const { text = '', success = () => {}, fail = () => {}, complete = () => {} } = args || {};
  let textArea;
  const createTextArea = () => {
    textArea = document.createElement('textArea');
    textArea.style.position = 'absolute';
    textArea.style.top = 0;
    textArea.style.opacity = 0;
    textArea.style.zIndex = -1;
    textArea.value = text;
    document.body.appendChild(textArea);
  };

  const selectText = () => {
    textArea.setAttribute('readonly', '');
    textArea.select();
    textArea.setSelectionRange(0, textArea.value.length);
  };

  const copyToClipboard = () => {
    document.execCommand('copy');
    textArea.remove();
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
