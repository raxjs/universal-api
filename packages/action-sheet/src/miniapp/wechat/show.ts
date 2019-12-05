import promisifyFn from '../promisifyFn';
import formatOriginal from '../formatOriginal';

declare const wx: any;
export default options => {
  options = formatOriginal(options, { items: 'itemList' });
  return typeof wx !== 'undefined' && promisifyFn(wx.showActionSheet, options, {'tapIndex': 'index'}, null);
};
