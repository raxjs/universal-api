export interface IPushOptions {
  url: string;
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
  success?: () => void;
  fail?: (res: any) => void;
  complete?: (res?: any) => void;
}

export interface INavigate {
  push(options: IPushOptions): Promise<null>;
  go(options: IGoOptions): Promise<null>;
  pop(options: IPopOptions): Promise<null>;
  replace(options: IReplaceOptions): Promise<null>;
}
