const getScrollOffset = (selector: string, context = tt): Promise<any[]> => {
  return new Promise((resolve) => {
    context.createSelectorQuery = context.createSelectorQuery || tt.createSelectorQuery;
    context.createSelectorQuery().selectAll(selector).scrollOffset().exec((ret) => {
      resolve(ret[0] ? ret[0].map((i) => ({ scrollLeft: i.scrollLeft, scrollTop: i.scrollTop })) : []);
    });
  });
};

export default getScrollOffset;
