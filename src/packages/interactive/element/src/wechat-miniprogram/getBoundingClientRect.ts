import { normalize } from '../common';

const getBoundingClientRect = normalize.getBoundingClientRect((selector: string, context: any = wx): Promise<any[]> => {
  return new Promise((resolve) => {
    const createSelectorQuery = context.createSelectorQuery || wx.createSelectorQuery;
    createSelectorQuery().selectAll(selector).boundingClientRect().exec((ret) => {
      resolve(ret[0]);
    });
  });
});

export default getBoundingClientRect;
