import { ChooseVideoOptions } from '../types';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

function inputCreateAndAppend(multiple: boolean) {
  const inputElement: any = document.createElement('INPUT');
  inputElement.name = 'file';
  inputElement.id = `input-${ Math.random() * 1e8}`;
  inputElement.type = 'file';
  multiple && inputElement.setAttribute('multiple', 'multiple');
  inputElement.style.display = 'none';
  inputElement.setAttribute('accept', 'video/*');
  document.body.appendChild(inputElement);
  return inputElement;
}

const chooseVideo = normalize.chooseVideo((args: ChooseVideoOptions = {}) => {
  const { success = () => {}, fail = () => {}, complete = () => {} } = args;
  try {
    const inputElement = inputCreateAndAppend(false);
    let files: any[] = [];
    inputElement.addEventListener(
      'change',
      (e) => {
        files = e.target.files;
        const res = {
          tempFilePath: window.URL.createObjectURL(files[0]),
          size: files[0].size,
          files,
        };
        success(res as any);
        complete(res as any);
        inputElement.remove && inputElement.remove();
      },
      false,
    );
    const MouseEvents = document.createEvent('MouseEvents');
    MouseEvents.initEvent('click', true, true);
    inputElement.dispatchEvent(MouseEvents);
  } catch (e) {
    fail(e);
    complete(e);
  }
}, CONTAINER_NAME.WEB);

export default chooseVideo;
