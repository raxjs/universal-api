// export default (options?, context = swan) => {
//   if (options && options.selectAll != undefined) {
//     options.observeAll = options.selectAll;
//   }
//   return context === swan ? context.createIntersectionObserver(null, options) : context.createIntersectionObserver(options);
// };

export default (args) => swan.createIntersectionObserver(...args);
