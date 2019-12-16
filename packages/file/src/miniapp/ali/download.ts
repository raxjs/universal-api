import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';

declare const my: any;
export default options => {
  options = formatOriginal(options, {'tempFilePath': 'apFilePath'});
  return promisifyFn(my.downloadFile, options, {'filePath': 'apFilePath'}, null);
};
