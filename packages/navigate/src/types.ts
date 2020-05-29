export interface IPushOptions {
  url: string;
  animated?: boolean;
}

export interface IPopOptions {
  animated?: boolean;
}

export interface IGoOptions {
  step: number;
  animated?: boolean;
}

export interface INavigate {
  push(options: IPushOptions): Promise<null>;
  go(options: IGoOptions): Promise<null>;
  pop(options: IPopOptions): Promise<null>;
}
