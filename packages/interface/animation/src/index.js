'use strict';
import { isWeex, isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import binding from 'weex-bindingx';
import transition from 'universal-transition';
import transformProperty from './transformProperty';
import transformEasing from './transformEasing';
import formatBezier from './formatBezier';
import { find, map } from './utils';

const inMiniApp = isMiniApp || isWeChatMiniProgram || isByteDanceMicroApp;

function getSupportBinding() {
  if (inMiniApp) {
    // weex-bindingx 'isSupportNewBinding' in MiniApp return true, fix it.
    return false;
  } else {
    return binding && binding.isSupportNewBinding;
  }
}

function initDefaultProps(props) {
  map(props, prop => {
    prop.delay = prop.delay > 0 ? prop.delay : 0;
    prop.duration = prop.duration >= 0 ? prop.duration : 350;
  });
  return props;
}

function getMaxDuration(props) {
  let maxDuration = 0;
  map(props, prop => {
    if (prop.duration + prop.delay > maxDuration) {
      maxDuration = prop.duration + prop.delay;
    }
  });
  return maxDuration;
}

export function getInitProperty(el, name) {
  if (!el) return 0;
  name = name.replace(/transform\./, '');
  let style = binding.getComputedStyle(isWeex ? el.ref : el);
  switch (name) {
    case 'scale':
      name = 'scaleX';
      break;
    case 'translate':
      name = 'translateX';
      break;
    case 'rotate':
      name = 'rotateZ';
      break;
  }
  if (style && undefined !== style[name]) {
    return style[name];
  }
  return 0;
}

class Animation {
  constructor(options, callback) {
    this.run(options, callback);
  }

  run(options, callback) {
    let easing = options.easing || 'easeOutSine';
    if (!options.props || !options.props.length) return;
    let props = [];
    let maxDuration = 0;
    let callbackFlag = false;

    options.props = initDefaultProps(options.props);
    maxDuration = getMaxDuration(options.props);

    // web || weex
    if (getSupportBinding()) {
      map(options.props, (prop) => {
        // let {start} = prop;
        let start = undefined !== prop.start ? prop.start : getInitProperty(prop.element, prop.property);
        // TODO start should be optional
        // let start = binding.getComputedStyle(prop.element)[prop.property.replace(/transform\./, '')];
        // console.error(binding.getComputedStyle(prop.element),prop.property,start)
        // TODO cubicBezier support
        // let bezier = formatBezier(easing);
        let bezier = formatBezier(prop.easing || easing);
        let expression = bezier && bezier.length === 4 ?
          `cubicBezier(t-${prop.delay},${start},${prop.end - start},${prop.duration},${bezier.join(',')})`
          : `${prop.easing || easing}(t-${prop.delay},${start},${prop.end - start},${prop.duration})`;
        if (prop && prop.element) {
          props.push({
            element: isWeex ? prop.element.ref : prop.element,
            expression: `t>=${prop.delay}?${expression}:${start}`,
            property: prop.property
          });
        }
      });
      if (!options.forceTransition) {
        let res = binding.bind({
          eventType: 'timing',
          exitExpression: `t>${maxDuration}`,
          props
        }, (e) => {
          if (e && e.state === 'exit') {
            callback && callback(e);
          }
        });

        this.token = res && res.token;
      }
    } else if (inMiniApp) {
      // make transition groupby element
      let transitionMap = [];
      let miniAppResult = {};
      map(options.props, (prop) => {
        if (prop && prop.element) {
          let transitionProps = transformProperty(prop.property, prop.end);
          let exist = find(transitionMap, (transitionItem) => {
            return transitionItem && transitionItem.element === prop.element;
          });

          if (exist) {
            let transform = exist.props.transform || [];
            if (transitionProps && transitionProps.transform) {
              transform = [...transform, ...transitionProps.transform];
            }

            exist.props = { ...exist.props, ...transitionProps, ...{ transform } };
          } else {
            transitionMap.push({
              element: prop.element,
              easing: transformEasing(prop.easing || easing),
              duration: prop.duration,
              props: transitionProps,
              startState: transformProperty(prop.property, prop.start),
              delay: prop.delay || 0
            });
          }
        }
      });
      map(transitionMap, (transitionItem) => {
        // For loop animation, from start to end.
        const transitionToStartState = transition('', {
          ...transitionItem.startState,
          ...transitionItem.startState.transform ? {
            transform: transitionItem.startState.transform.join(' '),
            webkitTransform: transitionItem.startState.transform.join(' ')
          } : {}
        }, {
          duration: 1, // Set 0 is not word in miniApp IDE.
          delay: 0
        }).export() || [];
        const transitionToEndState = transition('', {
          ...transitionItem.props,
          ...transitionItem.props.transform ? {
            transform: transitionItem.props.transform.join(' '),
            webkitTransform: transitionItem.props.transform.join(' ')
          } : {}
        }, {
          duration: transitionItem.duration,
          timingFunction: transitionItem.easing,
          delay: transitionItem.delay
        }).export() || [];

        if (transitionToStartState.concat) {
          miniAppResult[transitionItem.element] = transitionToStartState.concat(transitionToEndState);
        } else {
          // Keep the original logic
          miniAppResult[transitionItem.element] = transitionToEndState;
        }
      });

      if (inMiniApp) {
        this.miniAppResult = miniAppResult;
      }
    }
  }

  stop() {
    if (getSupportBinding() && this.token) {
      return binding.unbind({
        eventType: 'timing',
        token: this.token
      });
    }
    // transition not support stop
  }

  export() {
    return this.miniAppResult || '';
  }
}

function animate(options = {}, callback) {
  return new Animation(options, callback);
}


export default animate;


