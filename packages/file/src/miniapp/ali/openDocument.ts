import promisifyFn from '../promisifyFn';

declare const my: any;
export default options => promisifyFn(my.openDocument, options);