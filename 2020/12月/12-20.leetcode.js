// var reformatNumber = function (number) {
//   const s = number.replace(/ /g, "").replace(/-/g, "");
//   const l = s.length;
//   let res = "";
//   for (let i = 0; i < l; i += 3) {
//     if (l - i > 3 && l - i !== 4) {
//       res += `${s.slice(i, i + 3)}-`;
//     } else if (l - i === 4) {
//       res += `${s.slice(i, i + 2)}-${s.slice(i + 2)}`;
//       break;
//     } else {
//       res += `${s.slice(i)}`;
//     }
//   }
//   return res;
// };
// const number = "123 4-567";
// console.log(reformatNumber(number));
// var maximumUniqueSubarray = function (nums) {
//   const l = nums.length;

//   let sum = 0;
//   let max = 0;
//   const stack = [];
//   for (let i = 0; i < l; i++) {
//     if (stack.includes(nums[i])) {
//       while (stack[0] !== nums[i]) {
//         const item = stack.shift();
//         sum -= item;
//       }
//       stack.shift();
//       sum -= nums[i];
//     }
//     sum += nums[i];
//     stack.push(nums[i]);
//     max = Math.max(sum, max);
//   }
//   return max;
// };
// const nums = [
//   187,
//   470,
//   25,
//   436,
//   538,
//   809,
//   441,
//   167,
//   477,
//   110,
//   275,
//   133,
//   666,
//   345,
//   411,
//   459,
//   490,
//   266,
//   987,
//   965,
//   429,
//   166,
//   809,
//   340,
//   467,
//   318,
//   125,
//   165,
//   809,
//   610,
//   31,
//   585,
//   970,
//   306,
//   42,
//   189,
//   169,
//   743,
//   78,
//   810,
//   70,
//   382,
//   367,
//   490,
//   787,
//   670,
//   476,
//   278,
//   775,
//   673,
//   299,
//   19,
//   893,
//   817,
//   971,
//   458,
//   409,
//   886,
//   434,
// ];
// console.log(maximumUniqueSubarray(nums));
// var maxResult = function (nums, k) {
//   const l = nums.length;
//   const dp = new Array(l).fill(0);
//   dp[0] = nums[0];
//   for (let i = 1; i < l; i++) {
//     let max = -Infinity;
//     for (let j = Math.max(0, i - k); j < i; j++) {
//       max = Math.max(max, dp[j]);
//     }
//     dp[i] = max + nums[i];
//   }
//   return dp[l - 1];
// };
// const obj = require("./config.js");
// const search = (nums, k) => {
//   nums.push(0);
//   nums.unshift(0);
//   const l = nums.length;
//   const dp = new Array(l).fill(0);

//   for (let i = 1; i < l; i++) {
//     let max = dp[i - 1];
//     for (let j = Math.max(0, i - k); j < i; j++) {
//       max = Math.max(max, dp[j]);
//     }
//     dp[i] = max + nums[i];
//   }
//   return dp[l - 1];
// };
// var maxResult = function (nums, k) {
//   const l = nums.length;
//   let sum = nums[0];
//   for (let i = 1; i < l - 1; ) {
//     if (nums[i] >= 0) {
//       sum += nums[i];
//       i++;
//     } else {
//       let right = i;
//       while (right < l - 1 && nums[right] < 0) {
//         right++;
//       }

//       if (right - i >= k) {
//         sum += search(nums.slice(i, right), k);
//       }
//       i = right;
//     }
//   }
//   sum += nums[l - 1];
//   return sum;
// };
// const nums = [1, -5, -20, 4, -1, 3, -6, -3],
//   k = 2;
// // console.log(maxResult(obj.a, obj.k));
// console.log(maxResult(nums, k));
var countArrangement = function (N) {};
