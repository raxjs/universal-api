import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';

declare const wx: any;
export default options => {
  options = formatOriginal(options, {'filePath': 'tempFilePath'});
  return promisifyFn(wx.saveFile, options, {'filePath': 'savedFilePath'}, null);
};