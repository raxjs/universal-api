import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';
declare const wx: any;
export default options => {
  options = formatOriginal(options, {"fileName":"name"});
  return promisifyFn(wx['uploadFile'], options, null, null);
};