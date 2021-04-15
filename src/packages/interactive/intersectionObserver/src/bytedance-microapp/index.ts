export default (options?, context = tt) => {
  if (options && options.selectAll != undefined) {
    options.observeAll = options.selectAll;
  }
  return context === tt ? context.createIntersectionObserver(null, options) : context.createIntersectionObserver(options);
};
