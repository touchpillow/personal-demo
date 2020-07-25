// var majorityElement = function (nums) {
//   var map = {};
//   for (let i = 0, l = nums.length; i < l; i++) {
//     if (map[nums[i]]) {
//       map[nums[i]] += 1;
//     } else {
//       map[nums[i]] = 1;
//     }
//     if (map[nums[i]] > l / 2) return nums[i];
//   }
// };
// var majorityElement = function (nums) {
//   let count = 0;
//   let v;
//   for (const i of nums) {
//     if (!count) {
//       v = i;
//       count = 1;
//     } else if (v === i) {
//       count++;
//     } else {
//       count--;
//     }
//   }
//   return v;
// };
let map = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};
var titleToNumber = function (s) {
  const l = s.length;
  let sum = 0;
  for (let i = l - 1; i >= 0; i--) {
    sum += (s[i].charCodeAt() - 64) * Math.pow(26, l - i - 1);
  }
  return sum;
};
console.log(titleToNumber("AA"));
