export default (options?, component = null) => {
  if (options && options.selectAll != undefined) {
    options.observeAll = options.selectAll;
  }
  return wx.createIntersectionObserver(component, options);
};
