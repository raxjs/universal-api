import { initApiGet, initApiSet } from '../common';

export const getClipboard = initApiGet((args) => tt.getClipboardData(args));

export const setClipboard = initApiSet((args) => {
  args.data = args.text;
  delete args.text;
  return tt.setClipboardData(args)
});

export default {
  getClipboard,
  setClipboard
};
