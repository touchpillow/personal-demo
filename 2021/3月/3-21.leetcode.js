// var maxAscendingSum = function (nums) {
//   const l = nums.length;
//   const dp = nums.slice();
//   for (let i = 1; i < l; i++) {
//     if (nums[i] > nums[i - 1]) {
//       dp[i] = dp[i - 1] + nums[i];
//     }
//   }
//   return Math.max(...dp);
// };
// const nums = [12, 17, 15, 13, 10, 11, 12];

// console.log(maxAscendingSum(nums));
// var getNumberOfBacklogOrders = function (orders) {
//   const list0 = [];
//   const list1 = [];
//   for (const item of orders) {
//     if (item[2] === 0) {
//       //   if (!list1.length) {
//       //     list0.push(item);
//       //     continue;
//       //   }
//       while (list1.length && item[1] && list1[0][0] <= item[0]) {
//         if (list1[0][1] <= item[1]) {
//           item[1] -= list1[0][1];
//           list1.shift();
//         } else {
//           list1[0][1] -= item[1];
//           item[1] = 0;
//         }
//       }
//       if (item[1] > 0) {
//         const index = list0.findIndex((i) => i[0] >= item[0]);
//         if (index < 0) {
//           list0.push(item);
//         } else {
//           list0.splice(index, 0, item);
//         }
//       }
//     } else {
//       while (list0.length && item[1] && list0[list0.length - 1][0] >= item[0]) {
//         if (list0[list0.length - 1][1] <= item[1]) {
//           item[1] -= list0[list0.length - 1][1];
//           list0.pop();
//         } else {
//           list0[list0.length - 1][1] -= item[1];
//           item[1] = 0;
//         }
//       }
//       if (item[1] > 0) {
//         const index = list1.findIndex((i) => i[0] >= item[0]);
//         if (index < 0) {
//           list1.push(item);
//         } else {
//           list1.splice(index, 0, item);
//         }
//       }
//     }
//   }
//   const mod = Math.pow(10, 9) + 7;
//   return [...list0, ...list1].reduce((pre, item) => {
//     return (pre + item[1]) % mod;
//   }, 0);
// };
// const orders = [
//   [10, 5, 0],
//   [15, 2, 1],
//   [25, 1, 1],
//   [30, 4, 0],
// ];
// console.log(getNumberOfBacklogOrders(orders));
var maxValue = function (n, index, maxSum) {
  const realV = maxSum;
  maxSum -= n;
  const getSum = (max) => {
    const left = Math.min(index + 1, max);
    const right = Math.min(n - 1 - index, max);
    return (
      (left * (2 * max - left + 1)) / 2 +
      (right * (2 * max - 2 - right + 1)) / 2
    );
  };
  let left = 0;
  let right = realV;
  while (right > left) {
    if (right - left === 1) break;
    const mid = ~~((left + right) / 2);
    if (mid === left) break;
    const v = getSum(mid);
    if (v === maxSum) return mid + 1;
    if (v > maxSum) {
      right = mid;
    } else {
      left = mid;
    }
  }
  if (getSum(right) <= maxSum) return right + 1;
  return left + 1;
};
const n = 4,
  index = 2,
  maxSum = 6;
console.log(maxValue(n, index, maxSum));
