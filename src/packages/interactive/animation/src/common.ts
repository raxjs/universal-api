import { styleIn } from '@utils/styleOptions';
import { Animation, AnimationOptions, TransitionOptions } from './types';

/**
 * merge default options
 * @param containerName
 * @param options
 */
export function getDefaultOptions(containerName: string, options?: AnimationOptions): AnimationOptions {
  return styleIn(
    {
      duration: 400,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0',
      ...options,
    },
    containerName,
  );
}

/**
 * parse value of transform
 * @param value
 */
function parseTransform(value: string): Record<string, any[]> {
  const validMethods = [
    'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ',
    'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ',
    'translate', 'translate3d', 'translateX', 'translateY', 'translateZ',
    'skew', 'skewX', 'skewY',
    'matrix', 'matrix3d',
  ];

  value = String(value || '');
  let pos = 0;

  const isWord = (code: number) => {
    if (code >= 65 && code <= 90) return true; // A-Z
    if (code >= 97 && code <= 122) return true; // a-z
    if (code >= 48 && code <= 57) return true; // 0-9
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
    const args = [];
    let isReadArgs = false;
    let isExpectWord = true;

    while (pos < value.length) {
      skipSpace();
      let code = value.charCodeAt(pos);
      const chunkStart = pos;
      if (isWord(code)) {
        isExpectWord = false;
        while (pos < value.length && isWord(code)) {
          code = value.charCodeAt(++pos);
        }
        const str = value.slice(chunkStart, pos);
        if (isReadArgs) {
          args.push(str);
        } else {
          name = str;
          skipSpace();
          if (!eat('(')) break;
          isReadArgs = true;
          isExpectWord = true;
        }
      } else if (isExpectWord) {
        break;
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

  const result = {};

  while (pos < value.length) {
    const res = parseAtom();
    if (res && validMethods.includes(res.name)) {
      result[res.name] = res.args;
    } else {
      return {};
    }
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
      if (typeof animation[key] !== 'function') return;

      const value = opts[key];
      if (key === 'transform') {
        applyTransform(parseTransform(value));
      } else if (Array.isArray(value)) {
        animation[key](...value);
      } else {
        animation[key](value);
      }
    });
  };

  // from
  applyTransform(from);
  animation.step({
    ...animationOptions,
    duration: 0,
    delay: 0,
  });

  // to
  applyTransform(to);
  animation.step(animationOptions);

  return animation;
}
