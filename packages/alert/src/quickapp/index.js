import prompt from '@system.prompt';

const alert = (options = {}) => {
  const { title = '', content = '', buttonText = '确定' } = options;
  const buttons = [
    {
      text: buttonText,
    },
  ];
  return new Promise((resolve, reject) => {
    prompt.showDialog({
      title,
      message: content,
      buttons,
      autocancel: false,
      success: resolve,
      cancel: reject,
    });
  });
};

export default alert;
