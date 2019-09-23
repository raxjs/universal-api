import { hideKeyboardFactory } from '../factory';

declare const wx: any;

const hideKeyboard = hideKeyboardFactory(wx);

export default {
  hideKeyboard,
};
