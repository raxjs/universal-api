import { initApiGet, initApiSet } from '../common';

export const getClipboard = initApiGet(tt.getClipboardData);

export const setClipboard = initApiSet(tt.setClipboardData);

export default {
  getClipboard,
  setClipboard
};
