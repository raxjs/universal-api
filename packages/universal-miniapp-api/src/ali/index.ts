import { listenerApis, syncApis, needPromisifyApis } from '../common/native';
import overrideMap from './overrideMap';

declare const my: any;

export default [
  my,
  listenerApis,
  syncApis,
  needPromisifyApis,
  overrideMap,
];


