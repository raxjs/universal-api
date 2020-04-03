import storage from '@system.storage';

function setItem(key, value) {
  return new Promise(function(resolve, reject) {
    storage.set({
      key,
      value,
      success: function(data) {
        console.log('success', data);
        resolve(data);
      },
      fail: function(data, code) {
        console.log(`handling fail, code = ${code}`);
        reject(`handling fail, code = ${code}`);
      }
    });
  });
}

function getItem(key) {
  return new Promise(function(resolve, reject) {
    storage.get({
      key,
      success: function(data) {
        console.log('success', data);
        resolve(data);
      },
      fail: function(data, code) {
        console.log(`handling fail, code = ${code}`);
        reject(`handling fail, code = ${code}`);
      }
    });
  });
}

function removeItem(key) {
  return new Promise(function(resolve, reject) {
    storage.delete({
      key,
      success: function(data) {
        console.log('success', data);
        resolve(data);
      },
      fail: function(data, code) {
        console.log(`handling fail, code = ${code}`);
        reject(`handling fail, code = ${code}`);
      }
    });
  });
}

function clear() {
  return new Promise(function(resolve, reject) {
    storage.clear({
      success: function(data) {
        console.log('success', data);
        resolve(data);
      },
      fail: function(data, code) {
        console.log(`handling fail, code = ${code}`);
        reject(`handling fail, code = ${code}`);
      }
    });
  });
}

module.exports = {
  setItem,
  getItem,
  removeItem,
  clear
};
