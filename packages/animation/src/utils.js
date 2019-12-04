export function find(o, condition) {
  let result = null;
  forEach(o, (v, k) => {
    if (typeof condition === 'function') {
      if (condition(v, k)) {
        result = v;
      }
    } else {
      let propName = Object.keys(condition)[0];
      if (propName && v[propName] === condition[propName]) {
        result = v;
      }
    }
  });
  return result;
}

export function forEach(o, fn) {
  if (o instanceof Array) {
    return Array.prototype.forEach.call(o, fn);
  }
  Object.keys(o).forEach((key) => {
    fn(o[key], key);
  });
}

export function map(o, fn) {
  if (o instanceof Array) {
    return Array.prototype.map.call(o, fn);
  } else {
    let result = [];
    forEach(o, (v, k) => {
      result.push(fn(v, k));
    });
    return result;
  }
}
