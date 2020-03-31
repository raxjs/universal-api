const clipboardObj: any = {
  readText(): Promise<string> {
    return new Promise((reslove, reject): void => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const clipboard = require('@system.clipboard');
      clipboard.get({
        success: ({ text }): void => {
          reslove(text || '');
        },
        fail: (): void => {
          reject();
        }
      });
    });
  },
  writeText(text: string): Promise<string> {
    return new Promise((reslove, reject): void => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const clipboard = require('@system.clipboard');
      clipboard.set({
        text: text || '',
        success: (): void => {
          reslove(text);
        },
        fail: (): void => {
          reject();
        }
      });
    });
  }
};

export default clipboardObj;
