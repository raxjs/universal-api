
import formatBezier from './formatBezier';
// transform easing from binding to transition timingFunction
export default function transformEasing(easing) {
  let bezier = formatBezier(easing);

  if (bezier && bezier.length === 4) {
    return `cubic-bezier(${bezier.join(',')})`;
  }

  let map = {
    'easeInSine': 'ease-in',
    'easeOutSine': 'ease-out',
    'easeInOutSine': 'ease-in-out',
    'linear': 'linear'
  };


  return map[easing] || 'ease-out';
}
