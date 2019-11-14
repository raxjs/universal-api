export interface Options {
  title?: string;
  content?: string;
  buttonText?: string;
}

export interface Alert {
  (options: Options): Promise<null>;
}
