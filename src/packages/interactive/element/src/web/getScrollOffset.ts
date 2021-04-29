const getScrollOffset = (selector: string): Promise<any[]> => {
  return new Promise((resolve) => {
    const el = document.querySelectorAll(selector);
    resolve(el.length === 0 ? [] : [].map.call(el, (node) => ({
      scrollTop: node.scrollTop,
      scrollLeft: node.scrollLeft,
    })));
  });
};


export default getScrollOffset;
