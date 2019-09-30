// @ts-ignore
import { createElement, render } from 'rax';
import * as DriverDOM from 'driver-dom';
import * as WeexDriver from 'driver-weex';
import { isWeb } from 'universal-env';
import View from 'rax-view';
import Text from 'rax-text';
import { platform, appName, screenWidth, screenHeight, px2rpx } from '../src/';

const App = () => {
  console.log(px2rpx(1440));
  return (
    <View>
      <Text>{platform}</Text>
      <Text>{appName}</Text>
      <Text>{screenWidth}</Text>
      <Text>{screenHeight}</Text>
      <Text>{px2rpx(1440)}</Text>
    </View>
  );
};

render(<App />, document.body, { driver: isWeb ? DriverDOM : WeexDriver });