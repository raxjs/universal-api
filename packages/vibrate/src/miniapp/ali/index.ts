import {
  vibrateLongFactory,
  vibrateShortFactory
} from '../factory';

declare const my: any;

const vibrateShort = vibrateShortFactory(my);
const vibrateLong = vibrateLongFactory(my);

export default {
  vibrateShort,
  vibrateLong
};
