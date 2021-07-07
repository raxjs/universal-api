type TriggerType = 'click' | 'focus' |'blur' | 'change' ;

export class DOMUtil {
  element: Element;

  constructor(ele: string | Element, index = 0) {
    if (typeof ele === 'string') {
      const nodeList = document.querySelectorAll(ele);
      this.element = nodeList[index] ?? null;
    } else {
      this.element = ele;
    }
  }

  isAppeared() {
    if (!this.element) return false;
    return this.getComputedStyle()?.display !== 'none';
  }


  /**
   * get element computed style
   */
  getComputedStyle() {
    if (this.element) {
      return window.getComputedStyle(this.element);
    }
    return null;
  }

  toString() {
    if (this.element) {
      return this.element.innerHTML;
    }
    return '';
  }

  trigger(type: 'click' | 'focus' | 'blur'): void;
  trigger(type: 'change', value: string | number): void;

  /**
   * trigger dom event
   * @param type
   * @param arg
   */
  trigger(type: TriggerType, arg?: any) {
    let event: Event;
    switch (type) {
      case 'click':
        event = new window.MouseEvent(type);
        break;
      case 'focus':
      case 'blur':
        event = new window.FocusEvent(type);
        break;
      case 'change':
        event = new window.Event(type);
        (this.element as HTMLInputElement).value = String(arg);
        break;
      default:
    }

    if (this.element && event) {
      this.element.dispatchEvent(event);
    }
  }
}
