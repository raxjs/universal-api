// @ts-ignore
import { createElement, render } from 'rax';
import * as DriverDOM from 'driver-dom';
import * as WeexDriver from 'driver-weex';
import { isWeb } from 'universal-env';
import View from 'rax-view';
import Text from 'rax-text';
import Toast from '../src/';

const App = () => {
  const handleClick = () => {
    Toast.show('Hi');
  };
  return (
    // @ts-ignore
    <View onClick={handleClick}>
      <Text>click it!</Text>
    </View>
  );
};

render(<App />, document.body, { driver: isWeb ? DriverDOM : WeexDriver });