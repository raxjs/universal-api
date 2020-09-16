/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import View from 'rax-view';
import Text from 'rax-text';
import Toast from '../src/';

const App = () => {
  let count = 0;
  const handleClick = () => {
    Toast.show('Hi ' + count++);
  };
  const handleShowLong = () => {
    Toast.show('A long time toast', 300000);
  };
  const handleHide = () => {
    Toast.hide();
  };
  return (
    <View>
      <View onClick={handleClick}>
        <Text>click it!</Text>
      </View>
      <View onClick={handleShowLong}>
        <Text>show a long time toast</Text>
      </View>
      <View onClick={handleHide}>
        <Text>hide toast</Text>
      </View>
    </View>
  );
};

render(<App />, document.body, { driver: DriverUniversal });
