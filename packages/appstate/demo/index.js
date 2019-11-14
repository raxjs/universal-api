
/* eslint-disable import/no-extraneous-dependencies */
import { createElement, render, useState } from 'rax';
import * as DriverDOM from 'driver-dom';
import * as WeexDriver from 'driver-weex';
import { isWeb } from 'universal-env';
import AppState from '../src/index';

const App = () => {
  const [state, setState] = useState('init');
  const _handleAppStateChange = (nextAppState) => {
    setState(nextAppState); // active|background
  };
  AppState.addEventListener('change', _handleAppStateChange);
  // AppState.removeEventListener('change', _handleAppStateChange);

  return (
    <div>
      <text>AppState.isAvailable: </text>
      <text>{JSON.stringify(AppState.isAvailable)}</text>
      <text>AppState: </text>
      <text>{state} </text>
    </div>
  );
};

render(<App />, document.body, { driver: isWeb ? DriverDOM : WeexDriver });