// var maximumUnits = function (boxTypes, truckSize) {
//   boxTypes.sort((a, b) => {
//     if (a[1] !== [b[1]]) return b[1] - a[1];
//     return b[0] - a[0];
//   });
//   let c = 0;
//   for (const [a, b] of boxTypes) {
//     if (truckSize >= a) {
//       c += a * b;
//       truckSize -= a;
//     } else {
//       c += truckSize * b;
//       truckSize = 0;
//     }
//     if (truckSize <= 0) break;
//   }
//   return c;
// };
// var countPairs = function (deliciousness) {
//   const map = new Map();
//   const mod = Math.pow(10, 9) + 7;
//   for (const d of deliciousness) {
//     map.set(d, (map.get(d) || 0) + 1);
//   }
//   let c = 0;
//   for (const key of map.keys()) {
//     for (let i = 0; i <= 21; i++) {
//       if (map.has(Math.pow(2, i) - key)) {
//         if (key === Math.pow(2, i) - key) {
//           c += ((map.get(key) - 1) * map.get(key)) / 2;
//         } else {
//           c += (map.get(key) * map.get(Math.pow(2, i) - key)) / 2;
//         }
//       }
//     }
//   }
//   return c % mod;
// };
// const deliciousness = [1, 1, 1, 3, 3, 3, 7];
// console.log(countPairs(deliciousness));

// var waysToSplit = function (nums) {
//   const l = nums.length;
//   const mod = Math.pow(10, 9) + 7;
//   const sumLeft = new Array(l).fill(0);
//   sumLeft[0] = nums[0];
//   for (let i = 1; i < l; i++) {
//     sumLeft[i] = sumLeft[i - 1] + nums[i];
//   }
//   let res = 0;
//   let pre = 1;
//   let index = sumLeft.findIndex((item) => item > sumLeft[l - 1] / 3);
//   if (index < 0) {
//     index = l - 2;
//   }
//   let preCount = 0;
//   for (let i = 0; i < index; i++) {
//     if (i > 0 && nums[i] === 0) {
//       if (sumLeft[i] === 0) {
//         preCount--;
//       }
//       res = res + preCount;
//       continue;
//     }
//     pre = Math.max(i + 1, pre);
//     while (sumLeft[pre] < 2 * sumLeft[i] && pre < l - 2) {
//       pre++;
//     }
//     let j = pre;
//     while (
//       sumLeft[l - 1] - sumLeft[j] >= sumLeft[j] - sumLeft[i] &&
//       j < l - 1
//     ) {
//       j++;
//     }
//     preCount = j - pre;
//     res = res + preCount;
//   }
//   return res % mod;
// };
// // const nums = [0, 0, 0];
// console.log(waysToSplit(nums));
var minOperations = function (target, arr) {
  const l1 = target.length;
  const l2 = arr.length;
  const dp1 = new Array(l2 + 1).fill(0);
  const dp2 = new Array(l2 + 1).fill(0);
  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (target[i - 1] === arr[j - 1]) {
        dp2[j] = dp1[j - 1] + 1;
      } else {
        dp2[j] = Math.max(dp1[j], dp2[j - 1]);
      }
    }
    dp1.splice(0, l2 + 1, ...dp2);
  }
  return l1 - dp2[l2];
};
const target = [6, 4, 8, 1, 3, 2],
  arr = [4, 7, 6, 2, 3, 8, 6, 1];
console.log(minOperations(target, arr));
