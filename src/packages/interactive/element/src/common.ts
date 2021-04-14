export const styleBoundingClientRectResponse = (data) => {
  return data ? data.map((res) => ({
    left: isNone(res.left) ? '' : res.left,
    right: isNone(res.right) ? '' : res.right,
    top: isNone(res.top) ? '' : res.top,
    bottom: isNone(res.bottom) ? '' : res.bottom,
    width: res.width,
    height: res.height,
  })) : [];
};
export const normalize = {
  getBoundingClientRect: (api) => {
    return (...args) => {
      return api(...args).then(styleBoundingClientRectResponse);
    };
  },
};
const isNone = (val) => {
  return typeof val === 'undefined' || (!val && val !== 0);
};
