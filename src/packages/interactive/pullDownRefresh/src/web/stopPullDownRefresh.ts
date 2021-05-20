import { normalizeStop } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const clsPrefix = '__universal_pulldownrefresh';

const _stopPullDownRefresh = () => {
  // console.log("_stopPullDownRefresh  start");
  const refresh = document.getElementById(`${clsPrefix}_refresh`);
  if (refresh) {
    document.body.removeChild(refresh);
  }
};

const stopPullDownRefresh = normalizeStop(({ success = () => {}, fail = () => {}, complete = () => {} }) => {
  try {
    _stopPullDownRefresh();

    success();
    complete();
  } catch (error) {
    fail();
    complete();
  }
}, CONTAINER_NAME.WEB);

export default stopPullDownRefresh;
