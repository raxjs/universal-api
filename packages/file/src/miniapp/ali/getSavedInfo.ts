import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';

declare const my: any;
export default options => {
  options = formatOriginal(options, {'filePath': 'apFilePath'});
  return promisifyFn(my.getSavedFileInfo, options, null, null);
};