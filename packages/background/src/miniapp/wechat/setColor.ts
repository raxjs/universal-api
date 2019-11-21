import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';
declare const wx: any;
export default options => {
  options = formatOriginal(options, {
    'color' :'backgroundColor',
    'topColor' :'backgroundColorTop',
    'bottomColor' :'backgroundColorBottom',
  });
  return typeof wx !== 'undefined' && promisifyFn(wx['setBackgroundColor'], options, null, null);
};
