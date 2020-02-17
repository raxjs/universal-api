import Cache from '../Cache';

const cache = new Cache();

function getScrollOffset(selector: string) :Promise<Array<any>> {
  return new Promise(resolve => {
    resolve(cache.getInfo(selector).map(node => ({
      scrollTop: node.scrollTop,
      scrollLeft: node.scrollLeft,
      scrollWidth: node.scrollWidth,
      scrollHeight: node.scrollHeight
    })));
  });
}

function getBoundingClientRect(selector: string) :Promise<Array<any>> {
  return new Promise(resolve => {
    resolve(cache.getInfo(selector).map(node => node.getBoundingClientRect()));
  });
}

export default {
  getScrollOffset,
  getBoundingClientRect
}
