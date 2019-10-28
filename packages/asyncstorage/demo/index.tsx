import { createElement, render, useState } from 'rax';
import * as DriverDOM from 'driver-dom';
import * as WeexDriver from 'driver-weex';
import { isWeb } from 'universal-env';
import Toast from 'universal-toast';
import AsyncStorage from '../src/';

const App = () => {
  const [value, setValue] = useState();
  const [keys, setKeys] = useState([]);

  const setItemClick = async () => {
    try {
      await AsyncStorage.setItem('key', 'Hello World');
      AsyncStorage.getItem('key').then(setValue);
    } catch (error) {
    }
  };
  const removeClick = async () => {
    AsyncStorage.removeItem('key').then(() => {
      Toast.show('remove success.')
      AsyncStorage.getItem('key').then(data => {
        setValue(data);
      }).catch((e) => {
        setValue(e);
      });
    });
  };
  const clearClick = async () => {
    try {
      await AsyncStorage.clear();
      AsyncStorage.getItem('key').then(setValue);
      AsyncStorage.getAllKeys().then(setKeys);
    } catch (error) {
    }
  };

  const getAllKeysClick = async () => {
    AsyncStorage.getAllKeys().then(data => {
      setKeys(data);
    });
  };

  return (
    <div >

      <div>
        <text onClick={setItemClick}>setItem click !</text>
      </div>
      <div>
        <text>getItem key: </text>
        <text> {value}</text>
      </div>

      <div>
        <text onClick={removeClick}>removeItem click !</text>
      </div>
      <div>
        <text>getItem key: </text>
        <text> {value}</text>
      </div>

      <div>
        <text onClick={getAllKeysClick}>getAllKeys click !</text>
      </div>
      <div>
        <text>getAllKeys: </text>
        <text> {keys.toString()}</text>
      </div>

      <div>
        <text onClick={clearClick}>clear click !</text>
      </div>
    </div>
  );
};

render(<App />, document.body, { driver: isWeb ? DriverDOM : WeexDriver });