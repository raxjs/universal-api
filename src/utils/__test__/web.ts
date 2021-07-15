const g = global;

export class WebTestUtil {
  /**
   * 查找 DOM 节点
   * @param ele
   */
  static getNode(ele: string | Element): Element {
    if (typeof ele === 'string') {
      return g.document.querySelector(ele);
    }
    return ele;
  }

  /**
   * 返回节点样式
   * @param ele
   */
  static getComputedStyle(ele: string | Element) {
    const node = WebTestUtil.getNode(ele);
    return g.window.getComputedStyle(node);
  }

  /**
   * 判断是否存在节点
   * @param selector
   */
  static exists(selector: string): boolean {
    const dom = WebTestUtil.getNode(selector);
    if (!dom) return false;
    const { display } = WebTestUtil.getComputedStyle(dom);
    return display !== 'none';
  }
}
