import promisifyFn from '../promisifyFn';
declare const wx: any;
export default options => {
  if (options.current) {
    options.current = options.urls[options.current];
  }
  return promisifyFn(wx['previewImage'], options);
};
