import { initApi } from '../common';

export default initApi((args) => {
  // 压缩质量映射
  const quality = (args && args.quality != undefined) ? args.quality : 2;
  args.quality = quality * 33;
  return wx.compressImage(args)
});
