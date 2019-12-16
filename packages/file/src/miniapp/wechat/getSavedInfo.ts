import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';

declare const wx: any;
export default options => {
  options = formatOriginal(options, {'filePath': 'apFilePath'});
  return promisifyFn(wx.getSavedFileInfo, options, null, null);
};