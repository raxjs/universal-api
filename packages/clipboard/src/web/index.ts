const clipboard: any = {
  readText(): Promise<string> {
    return Promise.reject();
  },
  writeText(text: string): Promise<string> {
    return new Promise((resolve, reject): void => {
      const input = document.createElement('input');
      input.setAttribute('readonly', 'readonly');
      input.setAttribute('value', text);
      input.style.position = 'fixed';
      document.body.appendChild(input);
      input.focus();
      input.setSelectionRange(0, 9999);
      const removeInput = (): void => {
        document.body.removeChild(input);
      };
      try {
        if (document.execCommand('copy')) {
          removeInput();
          resolve(text);
        } else {
          removeInput();
          reject();
        }
      } catch (error) {
        removeInput();
        reject();
      }
    });
  }
};

export default clipboard;
