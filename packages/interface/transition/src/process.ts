import { setRpx, convertUnit } from 'style-unit';
import { isWeb } from 'universal-env';

if (isWeb && typeof document !== 'undefined') {
  // Temporary compatibility with setRpx
  setRpx(document.documentElement.clientWidth / 750);
}

export function processStyle(styles: any) {
  for (let prop in styles) {
    styles[prop] = convertUnit(styles[prop], prop);
  }
  return styles;
}

export function processParams(options: any, callback: any) {
  if (typeof options == 'function' || options == null) {
    callback = options;
    options = {
      timingFunction: 'ease',
      duration: 0,
      delay: 0,
    };
  }
  return [ options, callback ];
}
