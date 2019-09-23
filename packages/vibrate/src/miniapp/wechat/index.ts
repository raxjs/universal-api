import {
  vibrateLongFactory,
  vibrateShortFactory
} from '../factory';

declare const wx: any;

const vibrateShort = vibrateShortFactory(wx);
const vibrateLong = vibrateLongFactory(wx);

export default {
  vibrateShort,
  vibrateLong
};
