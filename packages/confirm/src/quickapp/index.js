import prompt from '@system.prompt';

const confirm = (options = {}) => {
  const {
    title = '',
    content = '',
    confirmButtonText = 'ok',
    cancelButtonText = 'cancel',
  } = options;
  const buttons = [
    {
      text: cancelButtonText,
      color: '#999999',
    },
    {
      text: confirmButtonText,
    },
  ];
  return new Promise((resolve, reject) => {
    prompt.showDialog({
      title,
      message: content,
      autocancel: false,
      buttons,
      success: (res) => {
        const { index } = res;
        resolve(Number(index) === 1);
      },
      cancel: reject,
    });
  });
};

export default confirm;
