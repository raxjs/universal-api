export interface Callback {
  (): void;
}

/**
 * Accelerometer monitor and cancel.
 */
export interface Accelerometer{
  /**
   * Monitoring acceleration data, the callback interval is 500ms, the interface calls will automatically start listening, can use offChange() to stop listening.
   * @param callback The callback function
   */
  onChange(callback: Callback): void;
  /**
   * Stop listening for acceleration data.
   * @param callback The callback function
   */
  offChange(callback: Callback): void;
}
