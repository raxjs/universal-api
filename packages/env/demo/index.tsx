// @ts-ignore
import { createElement, render } from 'rax';
import * as DriverDOM from 'driver-dom';
import { isWeb, isAndroid, isIOS } from '../src/';
import View from 'rax-view';
import Text from 'rax-text';

const App = () => <View>
  <Text>isWeb: {JSON.stringify(isWeb)}</Text>
  <Text>isAndroid: {JSON.stringify(isAndroid)}</Text>
  <Text>isIOS: {JSON.stringify(isIOS)}</Text>
</View>;

render(<App />, document.body, { driver: DriverDOM });