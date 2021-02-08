import { isDingdingMiniapp } from '@uni/env';
import { initApiGet, initApiSet } from '../common';

export const getClipboard = initApiGet((args) => isDingdingMiniapp ? dd.getClipboard(args) : my.getClipboard(args));

export const setClipboard = initApiSet((args) => isDingdingMiniapp ? dd.setClipboard(args) : my.setClipboard(args));

export default {
  getClipboard,
  setClipboard
};
