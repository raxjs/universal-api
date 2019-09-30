declare const weex: any;

const clipboardModule = weex.requireModule('clipboard');
const clipboard: any = {
  readText(): Promise<string> {
    return new Promise((resolve, reject): void => {
      try {
        clipboardModule.getString((ret): void => {
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
        clipboardModule.setString(text);
        resolve(text);
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default clipboard;
