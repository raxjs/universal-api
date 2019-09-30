
import { createElement, render } from 'rax';
import * as DriverDOM from 'driver-dom';
import * as WeexDriver from 'driver-weex';
import Clipboard from '../src/';
import { isWeb } from 'universal-env';

const App = () => {
  const handleClick = () => {
    Clipboard.writeText('hello world writeText!').then(text => {
      console.log('Copy success!');
    });
  };
  return (
    <div onClick={handleClick}>
      <text>copy it!</text>
    </div>
  );
};

render(<App />, document.body, { driver: isWeb ? DriverDOM : WeexDriver });
