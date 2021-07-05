import { normalizeSetNavigationBarColor } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

export class NavigationBar {
  private container: HTMLElement | null = null;
  private text: HTMLElement | null = null;
  constructor() {
    const clsPrefix = '__universal_navigation_bar';

    const styles = {
      navigationBarContainer: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexWrap: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      },
      navigationBarText: {
        fontSize: '14px',
        color: '#999',
      },
    };

    this.container = document.getElementById(`${clsPrefix}_container`);
    this.text = document.getElementById(`${clsPrefix}_text`);
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = `${clsPrefix}_container`;
      for (const key in styles.navigationBarContainer) {
        if (Object.prototype.hasOwnProperty.call(styles.navigationBarContainer, key)) {
          this.container.style[key] = styles.navigationBarContainer[key];
        }
      }
    }
    if (!this.text) {
      this.text = document.createElement('div');
      this.text.id = `${clsPrefix}_text`;
      for (const key in styles.navigationBarText) {
        if (Object.prototype.hasOwnProperty.call(styles.navigationBarText, key)) {
          this.text.style[key] = styles.navigationBarText[key];
        }
      }
    }
    this.container.appendChild(this.text);
    document.body.insertBefore(this.container, document.body.firstElementChild);
  }

  setNavigationBarColor(backgroundColor, frontColor) {
    this.container.style.backgroundColor = backgroundColor;
    this.text.style.color = frontColor;
  }
}

/**
 * 开启手动下拉刷新
 */
const setNavigationBarColor = normalizeSetNavigationBarColor(({
  backgroundColor, frontColor = '', success = () => {}, fail = () => {}, complete = () => {},
}) => {
  try {
    const navigationBar = new NavigationBar();
    navigationBar.setNavigationBarColor(backgroundColor, frontColor);

    success();
    complete();
  } catch (error) {
    fail();
    complete();
  }
}, CONTAINER_NAME.WEB);

export default setNavigationBarColor;
