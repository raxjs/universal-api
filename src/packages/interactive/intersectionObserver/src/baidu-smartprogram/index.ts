export default (options?, context = swan) => {
  // 防止传入自定义组件的this没有createIntersectionObserver
  return context === swan || !context.createIntersectionObserver ?
    context.createIntersectionObserver(null, options) :
    context.createIntersectionObserver(options);
};

