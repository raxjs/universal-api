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

function transformBase64(files: any[]): Promise<any []> {
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
            tempFilePaths: base64Array,
            tempFiles: base64Array.map(filePath => ({
              path: filePath,
              size: filePath.length
            }))
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

export const getImageInfo = initApi.getImageInfo((args) => {
  const image = new Image();
  image.src = args.src;
  if (image.naturalWidth) {
    const res = {
      width: image.naturalWidth,
      height: image.naturalHeight,
      path: args.src
    };
    args.success(res);
    args.complete(res);
  } else {
    const setImageInfo = () => {
      const res = {
        width: image.width,
        height: image.height,
        path: args.src
      };
      args.success(res);
      args.complete(res);
    };
    if (image.complete) {
      setImageInfo();
    } else {
      let checkTimer = null;
      const clear = () => {
        checkTimer = null;
        clearInterval(checkTimer);
      };
      checkTimer = setInterval(() => {
        if (image.width > 0 || image.height > 0) {
          setImageInfo();
          clear();
        }
      }, 40);
      image.onload = () => {
        if (checkTimer) {
          setImageInfo();
          clear();
        }
      };
      image.onabort = image.onerror = (e) => {
        args.fail(e);
        args.complete(e);
        clear();
      };
    }
  }
});

export const previewImage = () => {
  throw new Error('@uni/apis: previewImage不支持');
};

export const saveImage = () => {
  throw new Error('@uni/apis: saveImage不支持');
};

export default {
  chooseImage,
  compressImage,
  getImageInfo,
  previewImage,
  saveImage,
};
