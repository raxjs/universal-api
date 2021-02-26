import { normalizeGet, normalizeSet } from '../common';

export const getClipboard = normalizeGet((args) => tt.getClipboardData(args));

export const setClipboard = normalizeSet((args) => {
  args.data = args.text;
  delete args.text;
  return tt.setClipboardData(args)
});

export default {
  getClipboard,
  setClipboard
};
