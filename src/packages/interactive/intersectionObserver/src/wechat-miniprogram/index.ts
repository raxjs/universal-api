export default (options?, context = wx) => {
  if (options && options.selectAll != undefined) {
    options.observeAll = options.selectAll;
  }
  return context === wx ? context.createIntersectionObserver(null, options) : context.createIntersectionObserver(options);
};
