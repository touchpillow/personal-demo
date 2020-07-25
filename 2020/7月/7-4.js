// var isPathCrossing = function (path) {
//   const position = [0, 0];
//   const map = new Map();
//   map.set("00", 1);
//   for (let i = 0, l = path.length; i < l; i++) {
//     switch (path[i]) {
//       case "W":
//         position[0]--;
//         break;
//       case "E":
//         position[0]++;
//         break;
//       case "N":
//         position[1]++;
//         break;
//       case "S":
//         position[1]--;
//         break;
//     }
//     const ps = position.join("");
//     if (map.has(ps)) return true;
//     map.set(ps, 1);
//   }
//   return false;
// };
// var canArrange = function (arr, k) {
//   const l = arr.length;
//   const mark = new Array(l).fill(true);
//   for (let i = 0; i < l - 1; i++) {
//     if (!mark[i]) continue;
//     for (let j = i + 1; j < l; j++) {
//       if (!mark[j] && j == l - 1) return false;
//       if (!mark[j]) continue;
//       if (
//         (arr[i] % k) + (arr[j] % k) == k ||
//         (arr[i] % k) + (arr[j] % k) == 0
//       ) {
//         mark[i] = mark[j] = false;
//         break;
//       }
//       if (j == l - 1) return false;
//     }
//   }
//   return true;
// };
// const a = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9];
// console.log(canArrange(a, 5));
// var intToRoman = function (num) {
//   const key = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   const value = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I",
//   ];
//   let res = "";
//   for (let i = 0, l = key.length; i < l; i++) {
//     while (num > key[i]) {
//       res += value[i];
//       num -= key[i];
//     }
//   }
//   return res;
// };
// intToRoman(61);
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const l = nums.length;
  const res = [];
  console.log(nums);
  if (nums[0] * nums[l - 1] > 0) return res;
  for (let i = 0; i < l - 2; ) {
    if (nums[i] > 0) break;
    let start = i + 1;
    let end = l - 1;
    do {
      if (start >= end || nums[i] * nums[end] > 0) break; // 两人选相遇，或者三人同符号，则退出
      let result = nums[i] + nums[start] + nums[end];
      if (result === 0) {
        // 如果可以组队
        res.push([nums[i], nums[start], nums[end]]);
      }
      if (result < 0) {
        // 实力太弱，把菜鸟那边右移一位
        while (start < end && nums[start] === nums[++start]) {} // 如果相等就跳过
      } else {
        // 实力太强，把大神那边右移一位
        while (start < end && nums[end] === nums[--end]) {}
      }
    } while (start < end);
    while (nums[i] === nums[++i]) {}
  }
  console.log(res);
  return res;
};
threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
// var threeSum = function (nums) {
//   let res = [];
//   let length = nums.length;
//   nums.sort((a, b) => a - b); // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
//   if (nums[0] <= 0 && nums[length - 1] >= 0) {
//     // 优化1: 整个数组同符号，则无解
//     for (let i = 0; i < length - 2; ) {
//       if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
//       let first = i + 1;
//       let last = length - 1;
//       do {
//         if (first >= last || nums[i] * nums[last] > 0) break; // 两人选相遇，或者三人同符号，则退出
//         let result = nums[i] + nums[first] + nums[last];
//         if (result === 0) {
//           // 如果可以组队
//           res.push([nums[i], nums[first], nums[last]]);
//         }
//         if (result <= 0) {
//           // 实力太弱，把菜鸟那边右移一位
//           while (first < last && nums[first] === nums[++first]) {} // 如果相等就跳过
//         } else {
//           // 实力太强，把大神那边右移一位
//           while (first < last && nums[last] === nums[--last]) {}
//         }
//       } while (first < last);
//       while (nums[i] === nums[++i]) {}
//     }
//   }
//   return res;
// };
// console.log(threeSum([0, 0, 0, 0]));
