export default (options?, context = ks) => {
  if (options && options.selectAll != undefined) {
    options.observeAll = options.selectAll;
  }
  console.log('ks', context);
  // options 为null 会报错
  // return ks.createIntersectionObserver(context, options || {});
  // 防止传入自定义组件的this没有createIntersectionObserver
  return context === ks || !context.createIntersectionObserver ?
    context.createIntersectionObserver(null, options) :
    context.createIntersectionObserver(options || {});
};
