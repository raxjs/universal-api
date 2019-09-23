import { addPhoneContactFactory } from '../factory';

declare const my: any;

const addPhoneContact = addPhoneContactFactory(my, 'alipayAccount');

export default {
  addPhoneContact,
};
