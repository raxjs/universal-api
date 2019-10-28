declare const my: any;

const clipboard: any = {
  readText(): Promise<string> {
    return new Promise((resolve, reject): void => {
      my.getClipboard({
        success: ({ text }): void => {
          resolve(text);
        },
        fail: (): void => {
          reject();
        }
      });
    });
  },
  writeText(text: string): Promise<string> {
    return new Promise((resolve, reject): void => {
      my.setClipboard({
        text,
        success: (): void => {
          resolve(text);
        },
        fail: (): void => {
          reject();
        }
      });
    });
  }
};

export default clipboard;
