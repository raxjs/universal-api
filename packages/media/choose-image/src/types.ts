export interface Options {
  count?: number;
  sourceType?: string[];
  [name: string]: any;
};

export interface ChooseImage {
  (options: Options): Promise<any>;
}
