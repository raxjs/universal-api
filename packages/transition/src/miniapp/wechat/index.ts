import { processParams } from '../../process';
import { rpx2px } from 'universal-device';

declare const wx: any;

function parseTransform(transformValue) {
  const keyValueMap = {};
  if (!transformValue || transformValue.length < 1) {
    return keyValueMap;
  }
  const functionList = transformValue.match(/\w+\(.+?\)/g);

  if (functionList) {
    functionList.forEach(functionString => {
      const functionArray = functionString.match(/(\w+)\((.+?)\)/);
      if (functionArray && functionArray.length === 3) {
        keyValueMap[functionArray[1]] = functionArray[2].replace('deg', '').split(',');
      }
    });
  }
  return keyValueMap;
}


export default function transition(node: any, styles: any, options: any, callback: any) {
  [options, callback] = processParams(options, callback);

  // eslint-disable-next-line no-undef
  let animation = wx.createAnimation(Object.assign({}, options, {
    timeFunction: options.timingFunction || 'ease',
  }));
  const properties = Object.keys(styles);

  properties.map(property => {
    if (animation[property]) {
      animation = animation[property](styles[property]);
    }
    if (property === 'transform') {
      const transformList = parseTransform(styles[property]) as any;
      // 微信不支持 translate rpx
      Object.keys(transformList).forEach(key => {
        if (Array.isArray(transformList[key])) {
          transformList[key] = transformList[key].map(v => {
            if (/rpx$/.test(v)) {
              return rpx2px(parseFloat(v));
            }
            return v;
          });
        }
      });

      Object.keys(transformList).forEach(key => {
        if (animation[key]) {
          animation = animation[key](...transformList[key]);
        }
      });
    }
  });

  return {
    export() {
      return animation.step().export();
    }
  };
}
