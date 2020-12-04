import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';

declare const wx: any;
export default options => {
  options = formatOriginal(options, { 'title': 'content' });
  return promisifyFn(wx.showLoading, options, null, null);
};
