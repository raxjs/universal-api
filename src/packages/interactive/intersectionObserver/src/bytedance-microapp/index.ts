export default (options?, context = tt) => {
  if (options && options.selectAll != undefined) {
    options.observeAll = options.selectAll;
  }
  // 防止传入自定义组件的this没有createIntersectionObserver
  return context === tt || !context.createIntersectionObserver ?
    context.createIntersectionObserver(null, options) :
    context.createIntersectionObserver(options);
};
