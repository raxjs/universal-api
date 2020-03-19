import Cache from '../Cache';

const cache = new Cache();

function getScrollOffset(selector: string): Promise<any[]> {
  return new Promise(resolve => {
    cache.getSelector(selector).scrollOffset().exec(ret => {
      resolve(ret[0]);
    });
  });
}

function getBoundingClientRect(selector: string): Promise<any[]> {
  return new Promise(resolve => {
    cache.getSelector(selector).boundingClientRect().exec(ret => {
      resolve(ret[0]);
    });
  });
}

export default {
  getScrollOffset,
  getBoundingClientRect
};
