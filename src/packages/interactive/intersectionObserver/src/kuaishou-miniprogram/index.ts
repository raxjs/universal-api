export default (options?, context = ks) => {
  if (options && options.selectAll != undefined) {
    options.observeAll = options.selectAll;
  }
  return context === ks ? context.createIntersectionObserver(null, options) : context.createIntersectionObserver(options);
};
