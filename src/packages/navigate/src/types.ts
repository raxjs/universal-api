import { Uni } from '../../../../types/interface';

export interface IPushOptions extends Uni.COptions {
  url: string;
  isHash?: boolean;
  refresh?: boolean;
  success?: () => void;
  fail?: (res: any) => void;
  complete?: (res?: any) => void;
}

export interface IPopOptions extends Uni.COptions {
  success?: () => void;
  fail?: (res: any) => void;
  complete?: (res?: any) => void;
}

export interface IGoOptions extends Uni.COptions {
  step: number;
  success?: () => void;
  fail?: (res: any) => void;
  complete?: (res?: any) => void;
}

export interface IReplaceOptions extends Uni.COptions {
  url: string;
  isHash?: boolean;
  refresh?: boolean;
  success?: () => void;
  fail?: (res: any) => void;
  complete?: (res?: any) => void;
}

export interface IReLaunchOptions extends Uni.COptions {
  url: string;
  isHash?: boolean;
  refresh?: boolean;
  success?: () => void;
  fail?: (res: any) => void;
  complete?: (res?: any) => void;
}

export interface ISwitchTabOptions extends Uni.COptions {
  url: string;
  success?: () => void;
  fail?: (res: any) => void;
  complete?: (res?: any) => void;
}

export interface INavigate extends Uni.COptions {
  push: (options: IPushOptions) => Promise<null>;
  go: (options: IGoOptions) => Promise<null>;
  back: (options?: IPopOptions) => Promise<null>;
  replace: (options: IReplaceOptions) => Promise<null>;
  reLaunch: (options: IReLaunchOptions) => Promise<null>;
}
