import promisifyFn from '../promisifyFn';
declare const my: any;
export default options => typeof my !== 'undefined' && promisifyFn(my['showActionSheet'], options, null, null);
