function setItem(key, value) {
  return new Promise(function(resolve, reject) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const storage = require('@system.storage');
    storage.set({
      key,
      value,
      success: function(data) {
        resolve(data);
      },
      fail: function(data, code) {
        reject(`handling fail, code = ${code}`);
      }
    });
  });
}

function getItem(key) {
  return new Promise(function(resolve, reject) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const storage = require('@system.storage');
    storage.get({
      key,
      success: function(data) {
        resolve(data);
      },
      fail: function(data, code) {
        reject(`handling fail, code = ${code}`);
      }
    });
  });
}

function removeItem(key) {
  return new Promise(function(resolve, reject) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const storage = require('@system.storage');
    storage.delete({
      key,
      success: function(data) {
        resolve(data);
      },
      fail: function(data, code) {
        reject(`handling fail, code = ${code}`);
      }
    });
  });
}

function clear() {
  return new Promise(function(resolve, reject) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const storage = require('@system.storage');
    storage.clear({
      success: function(data) {
        resolve(data);
      },
      fail: function(data, code) {
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
