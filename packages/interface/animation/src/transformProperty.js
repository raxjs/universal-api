function getTransform(propName) {
  const matchValue = propName.match(/^transform.([\w]+)/);
  if (matchValue) {
    return matchValue[1]; // transform.translateX => translateX
  }
  return propName;
}

// transform property from binding to transition
export default function transformProperty(propName, propVal) {
  let key;
  let value;
  let result = {};
  propName = getTransform(propName);

  switch (propName) {
    case 'translateX':
    case 'translateY':
    case 'translateZ':
      key = 'transform';
      value = [`${propName}(${propVal}rpx)`];
      break;
    case 'scaleX':
    case 'scaleY':
      key = 'transform';
      value = [`${propName}(${propVal})`];
      break;
    case 'rotateX':
    case 'rotateY':
    case 'rotateZ':
      key = 'transform';
      value = [`${propName}(${propVal}deg)`];
      break;

    default:
      key = propName;
      value = propVal;
      break;
  }
  if (key && value !== undefined) {
    result[key] = value;
    // solve in old version browser
    if (key == 'transform') {
      result.webkitTransform = value;
    }
  }
  return result;
}
