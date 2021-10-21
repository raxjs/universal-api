// 比较传入版本1 是否小于传入版本2，如果相等或者大于 都返回false
export const isLessThanVersion = (target, current, splitSign = '.') => {
  const targetArr = target.split(splitSign);
  const currentArr = current.split(splitSign);
  let res = false;
  currentArr.some((i, idx) => {
    if (!targetArr[idx]) {
      return true;
    }
    if (i > targetArr[idx]) {
      res = true;
      return true;
    } else if (i < targetArr[idx]) {
      res = false;
      return true;
    }
  });
  return res;
};
