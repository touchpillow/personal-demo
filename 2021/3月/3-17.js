// var distributeCoins = function (root) {
//   let c = 0;
//   const dfs = (root) => {
//     if (!root) return [0, 0, 0];
//     const left = dfs(root.left);
//     const right = dfs(root.right);
//     c += Math.abs(left) + Math.abs(right);
//     return left + right + root.val - 1;
//   };
//   return c;
// };
/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.get(key)) {
    this.map.set(key, []);
  }
  this.map.get(key).push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) return null;
  const data = this.map.get(key);
  let left = 0;
  let right = data.length - 1;
  if (data[left][0] > timestamp) return "";
  if (data[left][0] === timestamp) return data[left][1];
  if (data[right][0] <= timestamp) return data[right][1];
  while (left < right) {
    const middle = ~~((left + right) / 2);
    if (left === middle) return data[left][1];
    if (data[middle][0] === timestamp) return ata[middle][1];
    if (data[middle][0] > timestamp) {
      right = middle;
    } else {
      left = middle;
    }
  }
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
