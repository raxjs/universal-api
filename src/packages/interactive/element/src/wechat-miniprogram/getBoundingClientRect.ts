import { normalize } from '../common';

const getBoundingClientRect = normalize.getBoundingClientRect((selector: string, context: any = wx): Promise<any[]> => {
  return new Promise((resolve) => {
    context.createSelectorQuery().selectAll(selector).boundingClientRect().exec((ret) => {
      resolve(ret[0]);
    });
  });
});

export default getBoundingClientRect;
