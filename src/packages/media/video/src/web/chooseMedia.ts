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

function transformBase64(files: any[]): Promise<any []> {
  return new Promise((resolve, reject) => {
    !files.length && reject();
    const base64Array: string[] = [];
    let count = 0;
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // @ts-ignore
        base64Array.push(e.target.result);
      };
      reader.onloadend = () => {
        count++;
        if (count === files.length) {
          resolve(base64Array);
        }
      };
    });
  });
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
        transformBase64(files).then((base64Array) => {
          const res = {
            tempFiles: base64Array.map((filePath) => ({
              tempFilePath: filePath,
              size: filePath.length,
            })),
            files,
          };
          success(res);
          complete(res);
        }).finally(() => inputElement.remove && inputElement.remove());
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
