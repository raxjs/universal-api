// @ts-ignore
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import View from 'rax-view';
import Text from 'rax-text';
import Toast from '../src/';

const App = () => {
  const handleClick = () => {
    Toast.show('Hi');
  };
  return (
    <View onClick={handleClick}>
      <Text>click it!</Text>
    </View>
  );
};

render(<App />, document.body, { driver: DriverUniversal });
