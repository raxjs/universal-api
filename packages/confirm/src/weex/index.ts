import { Options } from "../types";

declare const weex: any;

const confirm = (options: Options): Promise<boolean> => {
  return new Promise((resolve): void => {
    const { content = "", confirmButtonText, cancelButtonText } = options;
    const modal = weex.requireModule("modal");
    modal.confirm(
      {
        message: content,
        okTitle: confirmButtonText,
        cancelTitle: cancelButtonText
      },
      (confirm: string): void => {
        confirm === confirmButtonText ? resolve(true) : resolve(false);
      }
    );
  });
};

export default confirm;
