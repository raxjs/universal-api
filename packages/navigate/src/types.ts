export interface PushOptions {
  url: string;
  animated?: boolean;
}

export interface PopOptions {
  animated?: boolean;
}

export interface GoOptions {
  step: number;
  animated?: boolean;
}

export interface Navigate {
  push(options: PushOptions): Promise<null>;
  go(options: GoOptions): Promise<null>;
  pop(options: GoOptions): Promise<null>;
}
