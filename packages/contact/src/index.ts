import { isMiniApp, isWeChatMiniprogram } from 'universal-env';
import { IContact } from './types';

let Contact: IContact = {} as IContact;

if (isMiniApp) {
  Contact = require('./miniapp/ali').default;
}

if (isWeChatMiniprogram) {
  Contact = require('./miniapp/wechat').default;
}

export default Contact;
