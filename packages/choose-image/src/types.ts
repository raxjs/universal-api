export interface Options {
  count?: number;
  sourceType?: string[];
  accept?: string;
  [name: string]: any;
}

export interface ChooseResult {
  data: string[];
  files?: File[];
}

export type ChooseImage = (options?: Options) => Promise<ChooseResult>;
