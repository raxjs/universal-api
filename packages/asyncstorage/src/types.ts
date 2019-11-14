export interface AsyncStorage {
  /**
   * value = storage[key]
   */
  getItem(key: string): Promise<string | null>;
  /**
   * storage[key] = value
   */
  setItem(key: string, value: string): Promise<null>;
  /**
   * delete storage[key]
   */
  removeItem(key: string): Promise<null>;
  /**
   * get all keys.
   */
  getAllKeys(): Promise<string[]>;
  /**
   * Empties the list associated with the object of all key/value pairs, if there are any.
   */
  clear(): Promise<null>;
  /**
   * Returns the number of key length.
   */
  length: () => Promise<number>;
  [name: string]: any;
}
