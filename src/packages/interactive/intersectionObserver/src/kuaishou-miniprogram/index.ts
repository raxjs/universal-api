export default (options?, context = ks) => {
  if (options && options.selectAll != undefined) {
    options.observeAll = options.selectAll;
  }
  console.log('context === ks', context === ks);
  return context === ks ? context.createIntersectionObserver(null, options) : context.createIntersectionObserver(options);
};
