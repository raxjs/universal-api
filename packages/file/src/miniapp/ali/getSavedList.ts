import promisifyFn from '../promisifyFn';
declare const my: any;
export default options => {

  return promisifyFn(my['getSavedFileList'], options, {"filePath":"apFilePath"}, null);
};
