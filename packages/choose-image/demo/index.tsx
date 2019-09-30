
import { createElement, render } from 'rax';
import * as DriverDOM from 'driver-dom';
import * as WeexDriver from 'driver-weex';
import { isWeb } from 'universal-env';
import chooseImage from '../src/';

const App = () => {
  const handleClick = () => {
    chooseImage({
      count: 2
    }).then(res => {
      console.log('chooseImage - res: ', res)
    })
  };
  return (
    <div>
      <text onClick={handleClick}>
        Click !
      </text>
    </div>
  );
};

render(<App />, document.body, { driver: isWeb ? DriverDOM : WeexDriver });