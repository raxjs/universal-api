export default (options?, context = wx) => {
  if (options && options.selectAll != undefined) {
    options.observeAll = options.selectAll;
  }
  // 防止传入自定义组件的this没有createIntersectionObserver
  return context === wx || !context.createIntersectionObserver ?
    context.createIntersectionObserver(null, options) :
    context.createIntersectionObserver(options);
};
