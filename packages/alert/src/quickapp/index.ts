import { Options } from "../types";

const alert = (options: Options = {}): Promise<null> => {
  const { title = "", content = "", buttonText = "确定" } = options;
  const buttons = [
    {
      text: buttonText
    }
  ];
  return new Promise((resolve, reject) => {
    const prompt = require("@system.prompt");
    prompt.showDialog({
      title,
      message: content,
      buttons,
      autocancel: false,
      success: (): void => {
        resolve();
      },
      cancel: (): void => {
        reject();
      }
    });
  });
};

export default alert;
