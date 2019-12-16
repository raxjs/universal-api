import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';

declare const my: any;
export default options => {
  options = formatOriginal(options, {'apFilePaths': 'filePaths'});
  return promisifyFn(my.compressImage, options, {'filePaths': 'apFilePaths'}, null);
};
