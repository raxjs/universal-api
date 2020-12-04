export interface Options {
  title?: string;
  content?: string;
  buttonText?: string;
  [propName: string]: any;
}

export interface Alert {
  (options: Options): Promise<null>;
}
