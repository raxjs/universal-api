// import { normalizeSetNavigationBarColor } from '../common';
// import { CONTAINER_NAME } from '@utils/constant';

// const getMenuButtonBoundingClientRect = normalizeSetNavigationBarColor((args) => {
//   wx.setNavigationBarColor(args);
// }, CONTAINER_NAME.WECHAT);

// export default getMenuButtonBoundingClientRect;
export default () => wx.getMenuButtonBoundingClientRect();
