import animate, { getInitProperty } from '../';
import transformEasing from '../transformEasing';
import transformProperty from '../transformProperty';
import debug from 'debug';

const log = debug('universal-animation');

jest.mock('universal-env', () => {
  return {
    isWeb: true
  };
});

describe('Test animate', () => {
  test('Test animate method return value', () => {
    return new Promise((resolve) => {
      animate({
        props: [{
          element: document.body,
          property: 'transform.translateX',
          easing: 'easeOutSine',
          duration: 200,
          start: 0,
          end: 200,
          delay: 100
        }, {
          element: document.body,
          property: 'opacity',
          easing: 'easeOutSine',
          duration: 200,
          end: 0.2,
          delay: 100
        }]
      }, (e) => {
        log('timing end', e);
        resolve(e);
      });
    }).then((e) => {
      expect(e.state).toEqual('exit');
      expect(typeof e.t).toEqual('number');
    });
  });
});

describe('Test getInitProperty method', () => {
  document.body.innerHTML = '<div style="transform: scale(10, 0);" id="main"></div>';
  test('Should return scale 10', () => {
    expect(getInitProperty(document.getElementById('main'), 'scale')).toEqual(10);
  });
});

describe('Test transformEasing method', () => {
  test('Should return ease-in', () => {
    expect(transformEasing('easeInSine')).toEqual('ease-in');
  });
  test('Should return cubicBezier(a,b,c,d)', () => {
    expect(transformEasing('cubicBezier(a,b,c,d)')).toEqual('cubic-bezier(a,d,c,d)');
  });
});

describe('Test transformProperty method', () => {
  test('Should return transform', () => {
    expect(transformProperty('transform.translateY', '100')).toEqual({'transform': ['translateY(100rpx)'], 'webkitTransform': ['translateY(100rpx)']});
  });
  test('Should return itself', () => {
    expect(transformProperty('test', '200')).toEqual({'test': '200'});
  });
  test('Should return webkitTransform', () => {
    expect(transformProperty('transform', '200')).toEqual({'transform': '200', 'webkitTransform': '200'});
  });
});

