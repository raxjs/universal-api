import { normalizeGet, normalizeSet } from '../common';

export const getClipboard = normalizeGet((args) => wx.getClipboardData(args));

export const setClipboard = normalizeSet((args) => {
  args.data = args.text;
  delete args.text;
  return wx.setClipboardData(args)
});

export default {
  getClipboard,
  setClipboard
};
