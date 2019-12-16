import promisifyFn from '../promisifyFn';

declare const wx: any;
export default options => {
  return promisifyFn(wx.chooseImage, options, {'filePaths': 'tempFilePaths'}, null);
};
