import { ChooseImageOptions } from '../types';
import { initApi } from '../common';

function inputCreateAndAppend(multiple: boolean) {
  const inputElement: any = document.createElement('INPUT');
  inputElement.name = 'file';
  inputElement.id = 'input-' + Math.random() * 1e8;
  inputElement.type = 'file';
  multiple ? inputElement.setAttribute('multiple', 'multiple') : null;
  inputElement.style.display = 'none';
  inputElement.setAttribute('accept', 'image/*');
  document.body.appendChild(inputElement);
  return inputElement;
}

function transformBase64(files: any[]) {
  return new Promise((resolve, reject) => {
    !files.length ? reject() : null;
    const base64Array: string[] = [];
    let count = 0;
    files.forEach(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
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

export const chooseImage = initApi.chooseImage((args: ChooseImageOptions = {}) => {
  const { count = 1, sourceType = ['album', 'camera'], success = () => {}, fail = () => {}, complete = () => {}} = args;
  try {
    const inputElement = inputCreateAndAppend(count > 1);
    let files: any[] = [];
    inputElement.addEventListener(
      'change',
      e => {
        files = e.target.files && Array.from(e.target.files).slice(0, count);
        transformBase64(files).then(base64Array => {
          const res = {
            tempFilePaths: base64Array
          };
          success(res);
          complete(res);
        }).finally(() => inputElement.remove && inputElement.remove());
      },
      false
    );
    const MouseEvents = document.createEvent('MouseEvents');
    MouseEvents.initEvent('click', true, true);
    inputElement.dispatchEvent(MouseEvents);
  } catch (e) {
    fail(e);
    complete(e);
  }
});

export const compressImage = () => {
  throw new Error('@uni/apis: compressImage不支持');
};

export const getImageInfo = () => {
  throw new Error('@uni/apis: getImageInfo不支持');
};

export default {
  chooseImage,
  compressImage,
  getImageInfo
};
