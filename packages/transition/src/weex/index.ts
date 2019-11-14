import { processStyle, processParams } from '../process';

declare const weex: any;

export default function transition(node: any, styles: any, options: any, callback: any) {
  if (!node) return;

  [options, callback] = processParams(options, callback);
  styles = processStyle(styles);
  const animation = weex.requireModule('animation');
  animation.transition(node.ref, {
    styles,
    timingFunction: options.timingFunction || 'ease',
    delay: options.delay || 0,
    duration: options.duration || 0,
    needLayout: options.needLayout || false
  }, callback || function() { });
}
