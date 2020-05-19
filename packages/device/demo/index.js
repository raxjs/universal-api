/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import View from 'rax-view';
import Text from 'rax-text';
import { platform, appName, screenWidth, screenHeight } from '../src';

const App = () => {
  return (
    <View>
      <Text>{platform}</Text>
      <Text>{appName}</Text>
      <Text>{screenWidth}</Text>
      <Text>{screenHeight}</Text>
    </View>
  );
};

render(<App />, document.body, { driver: DriverUniversal });
