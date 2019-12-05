import promisifyFn from '../promisifyFn';

declare const wx: any;
export default options => promisifyFn(wx.openDocument, options);