import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalizeGet, normalizeSet } from '../common';

export const getClipboard = normalizeGet((args) => (isDingdingMiniapp ? dd.getClipboard(args) : my.getClipboard(args)));

export const setClipboard = normalizeSet((args) => (isDingdingMiniapp ? dd.setClipboard(args) : my.setClipboard(args)));

export default {
  getClipboard,
  setClipboard,
};
