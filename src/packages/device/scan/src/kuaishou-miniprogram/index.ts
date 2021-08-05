import { normalized } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const SCANTYPEMAP = {
  barCode: 'barCode',
  qrCode: 'qrCode',
  dmCode: 'datamatrix',
  pdf417Code: 'pdf417',
};
export default normalized((options) => {
  const { hideAlbum, scanType, success, fail, complete } = options;
  console.log('scan');
  ks.scanCode({
    onlyFromCamera: hideAlbum,
    scanType: SCANTYPEMAP[scanType],
    success,
    fail,
    complete,
  });
}, CONTAINER_NAME.KWAI);
