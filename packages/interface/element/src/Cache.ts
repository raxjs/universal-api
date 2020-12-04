// eslint-disable-next-line import/no-extraneous-dependencies
import { isWeb, isMiniApp, isWeChatMiniProgram } from 'universal-env';
import { Context } from './types';

declare const my: any;
declare const wx: any;
export default class Cache {
  public getSelector(selector: string, context?: Context) {
    if (isMiniApp && !isWeb) {
      const selectorQuery = my.createSelectorQuery().selectAll(selector);
      return selectorQuery;
    } else if (isWeChatMiniProgram && !isWeb) {
      if (!context) {
        context = wx;
      }
      const selectorQuery = context?.createSelectorQuery().selectAll(selector);
      return selectorQuery;
    } else {
      // Transform NodeList to Array
      const nodes = Array.from(document.querySelectorAll(selector));
      return nodes;
    }
  }
}
