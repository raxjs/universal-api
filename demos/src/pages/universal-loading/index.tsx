/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import View from 'rax-view';
import Text from 'rax-text';
import Loading from '../src/';

const App = () => {
  const handleClick = () => {
    Loading.show({
      content: 'Loading, please wait'
    });
    setTimeout(() => Loading.hide(), 3000);
  };
  return (
    <View onClick={handleClick}>
      <Text>Start loading</Text>
    </View>
  );
};

render(<App />, document.body, { driver: DriverUniversal });
