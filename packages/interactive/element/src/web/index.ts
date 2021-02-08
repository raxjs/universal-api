import {styleBoundingClientRectResponse} from '../common';

export const getScrollOffset = (selector: string): Promise<any[]> => {
  return new Promise(resolve => {
    resolve(Array.from(document.querySelectorAll(selector)).map(node => ({
      scrollTop: node.scrollTop,
      scrollLeft: node.scrollLeft,
    })));
  });
};

export const getBoundingClientRect = (selector: string): Promise<any[]> => {
  return new Promise(resolve => {
    resolve(Array.from(document.querySelectorAll(selector)).map(node => styleBoundingClientRectResponse(node.getBoundingClientRect())));
  });
};

export default {
  getScrollOffset,
  getBoundingClientRect
};
