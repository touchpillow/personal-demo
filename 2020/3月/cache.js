//单例模式 闭包
const instance = (() => {
  let instance = {};
  instance.prototype.setData = function(key, data) {
    const cache = getCache();
    cache.set(key, data);
  };
  instance.prototype.getData = function(key, data) {
    const cache = getCache();
    cache.get(key);
  };
  return instance;
})();
const getCache = (() => {
  let cache;
  return function() {
    if (cache === void 0) {
      cache = new Map();
    }
    return cache;
  };
})();
