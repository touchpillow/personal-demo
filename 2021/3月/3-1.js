// var wordSubsets = function (A, B) {
//   const map = new Map();
//   B.forEach((item) => {
//     const map2 = new Map();
//     for (const s of item) {
//       map2.set(s, (map2.get(s) || 0) + 1);
//       map.set(s, Math.max(map2.get(s), map.get(s) || 0));
//     }
//   });
//   return A.filter((item) => {
//     const map3 = new Map();
//     for (const s of item) {
//       map3.set(s, (map3.get(s) || 0) + 1);
//     }
//     for (const [s, v] of map.entries()) {
//       if (v > (map3.get(s) || 0)) return false;
//     }
//     return true;
//   });
// };
// const A = ["amazon", "apple", "facebook", "google", "leetcode"],
//   B = ["e", "oo"];
// console.log(wordSubsets(A, B));
var maxSubarraySumCircular = function (A) {
  const l = A.length;
  const sum = A.reduce((a, b) => a + b, 0);
  const left = new Array(l).fill(0);
  const min = new Array(l).fill(0);
  left[0] = A[0];
  min[0] = A[0];
  for (let i = 1; i < l; i++) {
    if (left[i - 1] <= 0) {
      left[i] = A[i];
    } else {
      left[i] = A[i] + left[i - 1];
    }
    if (min[i - 1] <= 0) {
      min[i] = min[i - 1] + A[i];
    } else {
      min[i] = A[i];
    }
  }
  const minSum = Math.min(...min);
  const sum1 = Math.max(...left);
  if (minSum === sum) return sum1;
  return Math.max(sum1, sum - minSum);
};
const a = [-10, -7, 9, -7, 6, 9, -9, -4, -8, -5];
console.log(maxSubarraySumCircular(a));
