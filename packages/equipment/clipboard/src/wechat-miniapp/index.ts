import { initApiGet, initApiSet } from '../common';

export const getClipboard = initApiGet((args) => wx.getClipboardData(args));

export const setClipboard = initApiSet((args) => {
  args.data = args.text;
  delete args.text;
  return wx.setClipboardData(args)
});

export default {
  getClipboard,
  setClipboard
};
