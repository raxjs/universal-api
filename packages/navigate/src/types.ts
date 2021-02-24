export interface IPushOptions {
  url: string;
  isHash?: boolean;
  refresh? : boolean;
  success?: () => void;
  fail?: (res: any) => void;
  complete?: (res?: any) => void;
}

export interface IPopOptions {
  success?: () => void;
  fail?: (res: any) => void;
  complete?: (res?: any) => void;
}

export interface IGoOptions {
  step: number;
  success?: () => void;
  fail?: (res: any) => void;
  complete?: (res?: any) => void;
}

export interface IReplaceOptions {
  url: string;
  isHash?: boolean;
  refresh? : boolean;
  success?: () => void;
  fail?: (res: any) => void;
  complete?: (res?: any) => void;
}

export interface IReLaunchOptions {
  url: string;
  isHash?: boolean;
  refresh? : boolean;
  success?: () => void;
  fail?: (res: any) => void;
  complete?: (res?: any) => void;
}

export interface INavigate {
  push(options: IPushOptions): Promise<null>;
  go(options: IGoOptions): Promise<null>;
  back(options: IPopOptions): Promise<null>;
  replace(options: IReplaceOptions): Promise<null>;
  reLaunch(options: IReLaunchOptions): Promise<null>;
}
