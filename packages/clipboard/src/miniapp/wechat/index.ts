declare const wx: any;

const clipboard: any = {
  readText(): Promise<string> {
    return new Promise((resolve, reject): void => {
      wx.getClipboardData({
        success: ({ data }): void => {
          resolve(data);
        },
        fail: (): void => {
          reject();
        }
      });
    });
  },
  writeText(text: string): Promise<string> {
    return new Promise((resolve, reject): void => {
      wx.setClipboardData({
        data: text,
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
