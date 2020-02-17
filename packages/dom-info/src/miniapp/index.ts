import Cache from '../Cache';

const cache = new Cache();

function getScrollOffset(selector: string) :Promise<Array<any>> {
  return new Promise(resolve => {
    cache.getInfo(selector).scrollOffset().exec(ret => {
      resolve(ret);
    });
  });
}

function getBoundingClientRect(selector: string) :Promise<Array<any>> {
  return new Promise(resolve => {
    cache.getInfo(selector).boundingClientRect().exec(ret => {
      resolve(ret);
    });
  });
}

export default {
  getScrollOffset,
  getBoundingClientRect
}
