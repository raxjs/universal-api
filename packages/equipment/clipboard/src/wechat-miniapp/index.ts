import { initApiGet, initApiSet } from '../common';

export const getClipboard = initApiGet(wx.getClipboardData);

export const setClipboard = initApiSet(wx.setClipboardData);

export default {
  getClipboard,
  setClipboard
};
