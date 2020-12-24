import { isDingdingMiniapp } from 'universal-env';
import { initApiGet, initApiSet } from '../common';

export const getClipboard = initApiGet(isDingdingMiniapp ? dd.getClipboard : my.getClipboard);

export const setClipboard = initApiSet((args) => {
  args.data = args.text;
  delete args.text;
  isDingdingMiniapp ? dd.setClipboard(args) : my.setClipboard(args);
});

export default {
  getClipboard,
  setClipboard
};
