import { styleBoundingClientRectResponse } from '../common';

export const getScrollOffset = (selector: string): Promise<any[]> => {
  return new Promise((resolve) => {
    my.createSelectorQuery().selectAll(selector).scrollOffset().exec((ret) => {
      resolve(ret[0] ? ret[0].map((i) => ({ scrollLeft: i.scrollLeft, scrollTop: i.scrollTop })) : []);
    });
  });
};

export const getBoundingClientRect = (selector: string): Promise<any[]> => {
  return new Promise((resolve) => {
    my.createSelectorQuery().selectAll(selector).boundingClientRect().exec((ret) => {
      resolve(ret[0] ? ret[0].map((i) => styleBoundingClientRectResponse(i)) : []);
    });
  });
};

export default {
  getScrollOffset,
  getBoundingClientRect,
};
