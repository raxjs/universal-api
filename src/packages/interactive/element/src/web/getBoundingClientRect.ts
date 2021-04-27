import { normalize } from '../common';

const getBoundingClientRect = normalize.getBoundingClientRect((selector: string): Promise<any[]> => {
  return new Promise((resolve) => {
    const el = document.querySelectorAll(selector);
    resolve(el.length === 0 ? [] : [].map.call(el, (node) => node.getBoundingClientRect()));
  });
});

export default getBoundingClientRect;
