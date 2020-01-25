
declare const __weex_require__: any;

let weexModule: any;
function getClipboard() {
  return weexModule = weexModule || __weex_require__('@weex-module/clipboard');
}

const clipboard: any = {
  readText(): Promise<string> {
    return new Promise((resolve, reject): void => {
      try {
        getClipboard().getString((ret): void => {
          resolve(ret.data);
        });
      } catch (error) {
        reject(error);
      }
    });
  },
  writeText(text: string): Promise<any> {
    return new Promise((resolve, reject): void => {
      try {
        getClipboard().setString(text);
        resolve(text);
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default clipboard;
