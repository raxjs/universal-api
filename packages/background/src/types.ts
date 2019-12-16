export interface Callback {
  (): void;
}

export interface CallbackOptions {
  /**
   * Interface to invoke a successful callback function.
   */
  success?: Callback;
  /**
   * Interface to call a failed callback function.
   */
  fail?: Callback;
  /**
   * Interface callback function at the end of the call (executed on success and failure).
   */
  complete?: Callback;
  [propName: string]: any;
}

export interface ColorOptions extends CallbackOptions {
  /**
   * The background color of the window must be a hexadecimal color value
   */
  color?: string;
  /**
   * Background color of top window, must be hexadecimal color value, supported by iOS only
   */
  topColor?: string;
  /**
   * Bottom window background color, must be hexadecimal color value, iOS only support
   */
  bottomColor?: string;
}

export interface TextStyleOptions extends CallbackOptions {
  /**
   * Drop down background font, loading diagram style, value: dark, light
   */
  style: 'dark' | 'light';
}

export interface Background {
  /**
   * Dynamically sets the background color of the window.
   * @param options The background color style of the window
   */
  setColor(options: ColorOptions): Promise<any> | boolean;
  /**
   * Dynamic Settings drop - down background font, loading map style.
   * @param options Background font, loading diagram style
   */
  setTextStyle(options: TextStyleOptions): Promise<any> | boolean;
}
