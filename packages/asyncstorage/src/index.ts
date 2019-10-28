import { isWeex, isMiniApp } from 'universal-env';
import { AsyncStorageOptions } from './types';

let AsyncStorage: AsyncStorageOptions;
if (isWeex) {
  AsyncStorage = require('./weex').default;
} else if (isMiniApp) {
  AsyncStorage = require('./miniapp').default;
} else {
  AsyncStorage = require('./web').default;
}

export default AsyncStorage;
