// eslint disable import/no-extraneous-dependencies
import { isWeb, isMiniApp, isWeChatMiniProgram } from 'universal-env';

declare const my :any;
declare const wx :any;
export default class Cache {
  private cache = {};
  public getInfo(selector) {
    if (this.cache[selector]) return this.cache[selector];
    if (isMiniApp && !isWeb) {
      const selectorQuery = my.createSelectorQuery().selectAll(selector);
      this.cache[selector] = selectorQuery;
      return selectorQuery;
    } else if (isWeChatMiniProgram && !isWeb) {
      const selectorQuery = wx.createSelectorQuery().selectAll(selector);
      this.cache[selector] = selectorQuery;
      return selectorQuery;
    } else {
      const nodes = document.querySelectorAll(selector);
      this.cache[selector] = nodes;
      return document.querySelectorAll(selector);
    }
  }
}
