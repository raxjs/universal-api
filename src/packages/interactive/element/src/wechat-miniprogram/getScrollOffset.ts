const getScrollOffset = (selector: string, context: any = wx): Promise<any[]> => {
  return new Promise((resolve) => {
    // const ele: any = document.querySelector(selector);
    // if (!ele || !ele._internal) {
    //   console.warn('element not found', selector);
    //   resolve([]);
    // }
    context.createSelectorQuery().selectAll(selector).scrollOffset().exec((ret) => {
      resolve(ret[0] ? ret[0].map((i) => ({ scrollLeft: i.scrollLeft, scrollTop: i.scrollTop })) : []);
    });
  });
};


export default getScrollOffset;
