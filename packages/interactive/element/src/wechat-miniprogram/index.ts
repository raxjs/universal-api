import {styleBoundingClientRectResponse} from '../common';

export const getScrollOffset = (selector: string, context: any = wx): Promise<any[]> => {
  return new Promise(resolve => {
    // const ele: any = document.querySelector(selector);
    // if (!ele || !ele._internal) {
    //   console.warn('element not found', selector);
    //   resolve([]);
    // }
    context.createSelectorQuery().selectAll(selector).scrollOffset().exec(ret => {
      resolve(ret[0].map(i => ({scrollLeft: i.scrollLeft, scrollTop: i.scrollTop})));
    });
  });
};

export const getBoundingClientRect = (selector: string, context: any = wx): Promise<any[]> => {
  return new Promise(resolve => {
    context.createSelectorQuery().selectAll(selector).boundingClientRect().exec(ret => {
      resolve(ret[0].map(i => styleBoundingClientRectResponse(i)));
    });
  });
};

export default {
  getScrollOffset,
  getBoundingClientRect
};
