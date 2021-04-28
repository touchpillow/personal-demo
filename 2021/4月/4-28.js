// var candy = function (ratings) {
//   const l = ratings.length;
//   const left = new Array(l).fill(1);
//   const right = new Array(l).fill(1);
//   for (let i = 1; i < l; i++) {
//     if (ratings[i] > ratings[i - 1]) {
//       left[i] = left[i - 1] + 1;
//     }
//   }
//   for (let i = l - 2; i >= 0; i--) {
//     if (ratings[i] > ratings[i + 1]) {
//       right[i] = right[i + 1] + 1;
//     }
//   }
//   let sum = 0;
//   for (let i = 0; i < l; i++) {
//     sum += Math.max(left[i], right[i]);
//   }

//   return sum;
// };
var candy = function (ratings) {
  const l = ratings.length;
  const dp = new Array(l).fill(1);
  for (let i = 1; i < l; i++) {
    if (ratings[i] > ratings[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
  for (let i = l - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      dp[i] = Math.max(dp[i + 1] + 1, dp[i]);
    }
  }
  return dp.reduce((a, b) => a + b, 0);
};
const a = [1, 2, 2];
console.log(candy(a));
