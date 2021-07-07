import { normalizeSetNavigationBarTitle } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

/**
 * 动态设置当前页面的标题
 */
const setNavigationBarTitle = normalizeSetNavigationBarTitle(({
  title, success = () => {}, fail = () => {}, complete = () => {},
}) => {
  try {
    document.title = title;

    success();
    complete();
  } catch (error) {
    fail();
    complete();
  }
}, CONTAINER_NAME.WEB);

export default setNavigationBarTitle;
