import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';
declare const wx: any;
export default options => {
  options = formatOriginal(options, {
    'style' :'textStyle',
  });
  return typeof wx !== 'undefined' && promisifyFn(wx['setBackgroundTextStyle'], options, {'errMsg': 'success'}, null);
};
