import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';
declare const wx: any;
export default options => {
  options = formatOriginal(options, { 'filePath' :'url' });
  return promisifyFn(wx['saveImageToPhotosAlbum'], options)
};
