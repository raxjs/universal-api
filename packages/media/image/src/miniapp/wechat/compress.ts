import promisifyFn from '../promisifyFn';

declare const wx: any;
export default options => {
  return promisifyFn(wx.compressImage, options, {'filePaths': 'tempFilePath'}, null);
};
