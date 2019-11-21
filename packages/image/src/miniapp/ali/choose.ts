import promisifyFn from '../promisifyFn';
declare const my: any;
export default options => {

  return promisifyFn(my['chooseImage'], options, {"filePaths":"apFilePaths"}, null);
};
