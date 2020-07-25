//函数节流和防抖
// import instance from "./cache.js";
// const thorttle = function(fn, interval = 200) {
//   let _self = fn;
//   let timer = null;
//   let firstTime = true;
//   return function() {
//     let args = arguments;
//     let _me = this;
//     if (firstTime) {
//       _self.apply(_me, args);
//       return (firstTime = false);
//     }
//     if (timer) {
//       return false;
//     }
//     timer = window.setTimeout(function() {
//       window.clearTimeout(timer);
//       timer = null;
//       _self.apply(_me, args);
//     }, interval);
//   };
// };
//单例模式
let cache;
const checkCache = () => {
  if (cache === void 0) {
    cache = new Map();
  }
};
const instance = {
  getData(key) {
    checkCache();
    return cache.get(key);
  },
  setData(key, data) {
    checkCache();
    cache.set(key, data);
  }
};
console.log(instance.getData("a"));
instance.setData("a", 1);
console.log(instance.getData("a"));

const handleColumnData = data => {
  //handle
};
const handleBarData = data => {
  //handle
};
const handleMapData = data => {
  //handle
};
const handleAreaData = data => {
  //handle
};
const handleLineData = data => {
  //handle
};

const chartDataHandle = {
  column: handleColumnData,
  bar: handleBarData,
  map: handleMapData,
  area: handleAreaData,
  line: handleLineData
};
const getChartDataByType = (type, data) => {
  return chartDataHandle[type](data);
};
