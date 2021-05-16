import { ChooseMediaOptions } from '../types';
import { CONTAINER_NAME } from '@utils/constant';
import { normalize } from '../common';

function inputCreateAndAppend(multiple: boolean) {
  const inputElement: any = document.createElement('INPUT');
  inputElement.name = 'file';
  inputElement.id = `input-${ Math.random() * 1e8}`;
  inputElement.type = 'file';
  multiple && inputElement.setAttribute('multiple', 'multiple');
  inputElement.style.display = 'none';
  // inputElement.setAttribute('accept', 'image/*');
  document.body.appendChild(inputElement);
  return inputElement;
}

const chooseMedia = normalize.chooseMedia((args: ChooseMediaOptions = {}) => {
  const { count = 9, success = () => {}, fail = () => {}, complete = () => {} } = args;
  try {
    const inputElement = inputCreateAndAppend(count > 1);
    let files: any[] = [];
    inputElement.addEventListener(
      'change',
      (e) => {
        files = e.target.files && Array.from(e.target.files).slice(0, count);
        const res = {
          tempFiles: files.map((file) => ({
            tempFilePath: window.URL.createObjectURL(file),
            size: file.size,
          })),
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

export default chooseMedia;
