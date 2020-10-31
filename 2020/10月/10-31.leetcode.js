// var frequencySort = function (nums) {
//   const map = new Map();
//   const l = nums.length;
//   if (l < 2) return nums;
//   for (const n of nums) {
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   return nums.sort((a, b) => {
//     if (map.get(a) !== map.get(b)) {
//       return map.get(a) - map.get(b);
//     } else {
//       return b - a;
//     }
//   });
// };
// const nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
// console.log(frequencySort(nums));
// var maxWidthOfVerticalArea = function (points) {
//   const l = points.length;
//   const x = new Array(l);
//   for (let i = 0; i < l; i++) {
//     x[i] = points[i][0];
//   }
//   x.sort((a, b) => a - b);
//   let max = x[1] - x[0];
//   for (let i = 1; i < l; i++) {
//     max = Math.max(x[i] - x[i - 1]);
//   }
//   return max;
// };
var countSubstrings = function (s, t) {
  if (s === t) return 0;
  const l = s.length;
  const v = t.length;
  const dp = new Array(l + 1)
    .fill("")
    .map(() => new Array(v + 1).fill("").map(() => [0, 0]));
  for (let i = 1; i <= l; i++) {
    for (let j = 1; j <= v; j++) {
      if (s[i] == t[j]) {
        dp[i][j][0] = dp[i - 1][j - 1][0] + 1;
        dp[i][j][1] = dp[i - 1][j - 1][1];
      } else {
        dp[i][j][0] = 0;
        dp[i][j][1] = dp[i - 1][j - 1][0] + 1;
      }
    }
  }
  return dp.reduce((res, item) => {
    return (
      res +
      item.reduce((a, b) => {
        return a + b[1];
      }, 0)
    );
  }, 0);
};
const s = "abe",
  t = "bbc";
console.log(countSubstrings(s, t));
