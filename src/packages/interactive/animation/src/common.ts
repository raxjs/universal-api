import { styleIn } from '@utils/styleOptions';
import { Animation, AnimationOptions, TransitionOptions } from './types';

/**
 * merge default options
 * @param containerName
 * @param options
 */
export function getMergedOptions(containerName: string, options?: AnimationOptions): AnimationOptions {
  const mergedOptions = styleIn(
    {
      duration: 400,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0',
      ...options,
    },
    containerName,
  );

  // set the min duration to 16ms to avoid some problems
  if (mergedOptions.duration < 16) {
    mergedOptions.duration = 16;
  }
  return mergedOptions;
}

/**
 * parse value of transform
 * @param value
 */
export function parseTransform(value: string): Record<string, any[]> {
  value = String(value || '');
  let pos = 0;

  const isValidWord = (code: number) => {
    if (code >= 65 && code <= 90) return true; // A-Z
    if (code >= 97 && code <= 122) return true; // a-z
    if (code >= 48 && code <= 57) return true; // 0-9
    if (code === 45 || code === 46) return true; // `-` or `.`
    return false;
  };

  const skipSpace = () => {
    while (pos < value.length) {
      const code = value.charCodeAt(pos);
      if (code === 32 || code === 160) { // ` `
        pos++;
      } else if (code === 13 || code === 10 || code === 8232 || code === 8233) { // new line
        if (code === 13 && value.charCodeAt(pos + 1) === 10) { // CRLF
          pos++;
        }
        pos++;
      } else if (code > 8 && code < 14) { // other space
        pos++;
      } else {
        break;
      }
    }
  };

  const eat = (char: string) => {
    if (value[pos] === char) {
      pos++;
      return true;
    }
    return false;
  };

  const parseAtom = () => {
    let name = '';
    const args: any[] = [];
    let isReadArgs = false;
    let isExpectWord = true;

    while (pos < value.length) {
      skipSpace();
      let code = value.charCodeAt(pos);
      if (isExpectWord) {
        if (!isValidWord(code)) break;

        const chunkStart = pos;
        while (pos < value.length && isValidWord(code)) {
          code = value.charCodeAt(++pos);
        }
        const str = value.slice(chunkStart, pos);
        if (isReadArgs) {
          args.push(str);
          isExpectWord = false;
        } else {
          name = str;
          skipSpace();
          if (!eat('(')) break;
          isReadArgs = true;
          isExpectWord = true;
        }
      } else if (code === 44) { // `,`
        isExpectWord = true;
        pos++;
      } else {
        break;
      }
    }

    if (isExpectWord || !eat(')')) return null;
    if (!name || args.length === 0) return null;
    return { name, args };
  };

  let hasInvalid = false;
  const getValidArg = (val: string, unit = '') => {
    const match = new RegExp(`^(-?\\d*(\\.\\d+)?)${unit}$`, 'i').exec(val);
    if (match && match[1]) {
      return Number(match[1]);
    } else {
      hasInvalid = true;
    }
  };

  const result = {};

  while (pos < value.length) {
    const res = parseAtom();
    skipSpace();
    if (!res) return {};

    let { args } = res;
    if (['rotate', 'rotateX', 'rotateY', 'rotateZ', 'skew', 'skewX', 'skewY'].includes(res.name)) {
      args = args.map((arg) => getValidArg(arg, 'deg'));
    } else if (['translate', 'translateX', 'translateY', 'translateZ', 'translate3d'].includes(res.name)) {
      args = args.map((arg) => getValidArg(arg, 'px'));
    } else if (['scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'matrix', 'matrix3d'].includes(res.name)) {
      args = args.map((arg) => getValidArg(arg, ''));
    } else if (res.name === 'rotate3d') {
      args = [].concat(
        args.slice(0, 3).map((arg) => getValidArg(arg, '')),
        args.slice(3, 4).map((arg) => getValidArg(arg, 'deg')),
      );
    } else {
      return {};
    }

    if (hasInvalid) return {};

    result[res.name] = args;
  }

  return result;
}

/**
 * normalize createTransition method
 * @param animation
 * @param options
 */
export function normalizeCreateTransition(animation: Animation, options: TransitionOptions): Animation {
  const { from = {}, to = {}, options: animationOptions } = options || {};

  const applyTransform = (opts) => {
    Object.keys(opts).forEach((key) => {
      const value = opts[key];
      if (key === 'transform') {
        applyTransform(parseTransform(value));
      } else if (typeof animation[key] === 'function') {
        if (Array.isArray(value)) {
          animation[key](...value);
        } else {
          animation[key](value);
        }
      }
    });
  };

  // from
  applyTransform(from);
  animation.step({
    ...animationOptions,
    duration: 16,
    delay: 0,
  });

  // to
  applyTransform(to);
  animation.step(animationOptions);

  return animation;
}
