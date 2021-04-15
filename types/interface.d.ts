interface Ob {
  [key: string]: any;
}

interface Ext {
  wechatMiniProgram?: Ob;
  aliMiniApp?: Ob;
  bytedanceMicroApp?: Ob;
  web?: Ob;
  baiduSmartProgram?: Ob;
  kuaishouMiniProgram?: Ob;
}

declare namespace Uni {
  interface COptions {
    _ext?: Ext;
  }
}
