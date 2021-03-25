const getScrollOffset = (selector: string): Promise<any[]> => {
  return new Promise((resolve) => {
    tt.createSelectorQuery().selectAll(selector).scrollOffset().exec((ret) => {
      resolve(ret[0] ? ret[0].map((i) => ({ scrollLeft: i.scrollLeft, scrollTop: i.scrollTop })) : []);
    });
  });
};

export default getScrollOffset;
