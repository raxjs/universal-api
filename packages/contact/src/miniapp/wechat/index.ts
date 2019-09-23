import { addPhoneContactFactory } from '../factory';

declare const wx: any;

const addPhoneContact = addPhoneContactFactory(wx, 'weChatNumber');

export default {
  addPhoneContact,
};
