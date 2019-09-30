import { Options } from '../types';

function inputCreateAndAppend(multiple: boolean) {
  const inputElement: any = document.createElement('INPUT');
  inputElement.name = 'file';
  inputElement.id = 'input-' + (Math.random() * 1e8);
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

const choose = (options: Options = {}): Promise<any> => {
  return new Promise((resolve, reject): void => {
    const { count = 1 } = options;
    const inputElement = inputCreateAndAppend(count > 1);
    let files: any[] = [];
    inputElement.addEventListener(
      'change',
      e => {
        files = e.target.files && Array.from(e.target.files).slice(0, count);
        transformBase64(files).then(base64Array => {
          resolve({
            data: base64Array
          });
        }).catch(reject).finally(() => inputElement.remove && inputElement.remove());
      },
      false
    );
    const MouseEvents = document.createEvent('MouseEvents');
    MouseEvents.initEvent('click', true, true);
    inputElement.dispatchEvent(MouseEvents);
  });
};

export default choose;
