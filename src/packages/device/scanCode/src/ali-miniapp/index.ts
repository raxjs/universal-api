export default (options) => {
  const { hideAlbum, scanType, success, fail, complete } = options;
  my.scan({
    hideAlbum,
    scanType,
    success,
    fail,
    complete,
  });
};
