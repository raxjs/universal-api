
import { createElement, render } from 'rax';
import * as DriverDOM from 'driver-dom';
import * as WeexDriver from 'driver-weex';
import { isWeb } from 'universal-env';
import Navigate from '../src/';


const App = () => {
  const navigatePush = () => {
    const url = isWeb ? 'https://www.taobao.com' : 'https://editor.weex.io/compiled/2af40e54aeef15228cb221c3cd57ae8f/bundle.weex.js'
    Navigate.push({
      url
    });
  };

  const navigatePop = () => {
    Navigate.pop();
  };

  const navigateGo = () => {
    Navigate.go({
      step: -1
    });
  };
  return (
    <div>

      <div onClick={navigatePush}>
        <text>Push !</text>
      </div>

      <div onClick={navigatePop}>
        <text>Pop !</text>
      </div>

      <div onClick={navigateGo}>
        <text>Go -1 !</text>
      </div>

    </div>
  );
};

render(<App />, document.body, { driver: isWeb ? DriverDOM : WeexDriver });
