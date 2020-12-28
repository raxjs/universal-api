import { initApi } from '../common';

const getImageInfo = () => {
  throw new Error('universal-api: getImageInfo不支持');
};

export default initApi(getImageInfo);
