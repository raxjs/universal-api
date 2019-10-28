export interface Storage {
  /**
   * Returns the number of key/value pairs currently present in the list associated with the
   * object.
   */
  readonly length: number;
  /**
   * Empties the list associated with the object of all key/value pairs, if there are any.
   */
  clear(): void;
  /**
   * value = storage[key]
   */
  getItem(key: string): string | null;
  /**
   * Returns the name of the nth key in the list, or null if n is greater
   * than or equal to the number of key/value pairs in the object.
   */
  key(index: number): string | null;
  /**
   * delete storage[key]
   */
  removeItem(key: string): void;
  /**
   * storage[key] = value
   */
  setItem(key: string, value: string): void;
  [name: string]: any;
}

export interface AsyncStorageOptions {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<null>;
  removeItem: (key: string) => Promise<null>;
  getAllKeys: () => Promise<string[]>;
  clear: () => Promise<null>;
  length: () => Promise<number>;
}
