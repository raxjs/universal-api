import { Options } from '../types';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const makePhoneCall = (options: Options): void => {
  const phoneNumber = options?.phoneNumber;
  const a = document.createElement('a');
  a.href = `tel:${phoneNumber}`;
  a.innerHTML = `tel:${phoneNumber}`;
  a.style.display = 'none';
  document.body.appendChild(a);

  setTimeout(() => {
    a.click();

    // remove
    setTimeout(() => {
      try {
        document.body.removeChild(a);
      } catch (e) {
        // ignore
      } finally {
        options?.success(); // set resolved
      }
    }, 0);
  }, 0);
};

export default normalize(makePhoneCall, CONTAINER_NAME.WEB);
