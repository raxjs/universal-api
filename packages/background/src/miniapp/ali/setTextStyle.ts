import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';
declare const my: any;
export default options => {
  options = formatOriginal(options, {
    'style' :'textStyle',
  });
  return typeof my !== 'undefined' && promisifyFn(my['setBackgroundTextStyle'], options, null, null);
};
