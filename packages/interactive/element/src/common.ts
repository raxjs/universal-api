export const styleBoundingClientRectResponse = (res) => {
  return {
    left: res.left || '',
    right: res.right || '',
    top: res.top || '',
    bottom: res.bottom || '',
    width: res.width,
    height: res.height,
  };
};