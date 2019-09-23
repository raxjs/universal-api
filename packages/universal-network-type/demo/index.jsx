/* eslint-disable import/no-extraneous-dependencies */
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import View from 'rax-view';
import Text from 'rax-text';
import NetworkType from '../src';

const App = () => {
  const handleClick = () => {
    NetworkType.getNetworkType();
  };
  return (
    <View onClick={handleClick}>
      <Text>click it!</Text>
    </View>
  );
};

render(<App />, document.body, { driver: DriverUniversal });
