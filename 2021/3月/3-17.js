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
// var TimeMap = function () {
//   this.map = new Map();
// };

// /**
//  * @param {string} key
//  * @param {string} value
//  * @param {number} timestamp
//  * @return {void}
//  */
// TimeMap.prototype.set = function (key, value, timestamp) {
//   if (!this.map.get(key)) {
//     this.map.set(key, []);
//   }
//   this.map.get(key).push([timestamp, value]);
// };

// /**
//  * @param {string} key
//  * @param {number} timestamp
//  * @return {string}
//  */
// TimeMap.prototype.get = function (key, timestamp) {
//   if (!this.map.has(key)) return null;
//   const data = this.map.get(key);
//   let left = 0;
//   let right = data.length - 1;
//   if (data[left][0] > timestamp) return "";
//   if (data[left][0] === timestamp) return data[left][1];
//   if (data[right][0] <= timestamp) return data[right][1];
//   while (left < right) {
//     const middle = ~~((left + right) / 2);
//     if (left === middle) return data[left][1];
//     if (data[middle][0] === timestamp) return ata[middle][1];
//     if (data[middle][0] > timestamp) {
//       right = middle;
//     } else {
//       left = middle;
//     }
//   }
// };

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// var findLengthOfLCIS = function (nums) {
//   const l = nums.length;
//   const dp = new Array(l).fill(1);
//   // if(){}
// };

// var maximumScore = function (nums, k) {
//   const l = nums.length;
//   let left = k;
//   let right = k;
//   let max = 0;
//   let min = nums[k];
//   while (left >= 0 && right < l) {
//     while (left && nums[left - 1] >= min) {
//       left--;
//     }
//     while (right < l - 1 && nums[right + 1] >= min) {
//       right++;
//     }
//     max = Math.max((right - left + 1) * min, max);
//     if (!left && right === l - 1) break;
//     if (left && right < l - 1) {
//       min = Math.max(nums[left - 1], nums[right + 1]);
//     } else if (left) {
//       min = Math.min(min, nums[left - 1]);
//     } else {
//       min = Math.min(min, nums[right + 1]);
//     }
//   }
//   return max;
// };
var preorderTraversal = function (root) {
  const stack = [];
};
