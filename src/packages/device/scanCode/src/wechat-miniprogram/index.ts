export default (options) => {
  const { hideAlbum, scanType, success, fail, complete } = options;
  wx.scanCode({
    onlyFromCamera: hideAlbum,
    scanType,
    success,
    fail,
    complete,
  });
};
