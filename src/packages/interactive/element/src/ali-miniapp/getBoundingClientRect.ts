import { normalize } from '../common';

const getBoundingClientRect = normalize.getBoundingClientRect((selector: string): Promise<any[]> => {
  return new Promise((resolve) => {
    my.createSelectorQuery().selectAll(selector).boundingClientRect().exec((ret) => {
      resolve(ret[0]);
    });
  });
});
export default getBoundingClientRect;
