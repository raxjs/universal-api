import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';
declare const my: any;
export default options => {
  options = formatOriginal(options, {
    'color' :'backgroundColor',
    'topColor' :'backgroundColorTop',
    'bottomColor' :'backgroundColorBottom',
  });
  return typeof my !== 'undefined' && promisifyFn(my['setBackgroundColor'], options, null, null);
};
