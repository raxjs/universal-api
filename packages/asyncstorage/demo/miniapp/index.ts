import AsyncStorage from '../../src/miniapp/index';

Page({
  onLoad() {
  },
  setItemClick() {
    AsyncStorage.setItem('key', 'Hello World').then(() => {
      AsyncStorage.getItem('key').then(value => {
        console.log('key: ', value);
      });
    });
  },
  removeClick() {
    AsyncStorage.removeItem('key').then(() => {
      console.log('remove success')
      AsyncStorage.getItem('key').then(data => {
        console.log('success: ', data);
      }).catch((e) => {
        console.log('catch: ', e);
      });
    });
  },
  clearClick() {
    AsyncStorage.clear();
  },
  getAllKeysClick() {
    AsyncStorage.getAllKeys().then(data => {
      console.log(data);
    });
  }
});
