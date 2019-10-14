import { listenerApis, syncApis, needPromisifyApis } from '../common/native';
import overrideMap from './overrideMap';

declare const wx: any;

export default [
  wx,
  listenerApis,
  syncApis,
  needPromisifyApis,
  overrideMap,
];


