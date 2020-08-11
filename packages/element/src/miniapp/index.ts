import Cache from '../Cache';
import { Context } from '../types';

const cache = new Cache();

function getScrollOffset(selector: string, context?: Context): Promise<any[]> {
  return new Promise(resolve => {
    cache.getSelector(selector, context).scrollOffset().exec(ret => {
      resolve(ret[0]);
    });
  });
}

function getBoundingClientRect(selector: string, context?: Context): Promise<any[]> {
  return new Promise(resolve => {
    cache.getSelector(selector, context).boundingClientRect().exec(ret => {
      resolve(ret[0]);
    });
  });
}

export default {
  getScrollOffset,
  getBoundingClientRect
};
