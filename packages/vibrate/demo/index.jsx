/* eslint-disable import/no-extraneous-dependencies */
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import View from 'rax-view';
import Text from 'rax-text';

const App = () => {
  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
};

render(<App />, document.body, { driver: DriverUniversal });
