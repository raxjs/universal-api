import promisifyFn from '../promisifyFn';

declare const wx: any;
export default () => promisifyFn(wx.hideLoading, {});
