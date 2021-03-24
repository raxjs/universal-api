const isNone = (val) => {
  return typeof val === 'undefined' || (!val && val !== 0);
};
export const styleBoundingClientRectResponse = (res) => {
  return {
    left: isNone(res.left) ? '' : res.left,
    right: isNone(res.right) ? '' : res.right,
    top: isNone(res.top) ? '' : res.top,
    bottom: isNone(res.bottom) ? '' : res.bottom,
    width: res.width,
    height: res.height,
  };
};
