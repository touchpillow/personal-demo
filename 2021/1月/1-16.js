// var maxProfit = function (prices, fee) {
//   const l = prices.length;
//   const hold = new Array(l).fill(0);
//   const unhold = new Array(l).fill(0);
//   hold[0] = -prices[0];
//   for (let i = 1; i < n; i++) {
//     hold[i] = Math.max(hold[i - 1], unhold[i - 1] - prices[i]);

//     unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i] - fee);
//   }
//   return unhold[n - 1];
// };
var findLength = function (A, B) {
  const l1 = A.length;
  const l2 = B.length;
  let max = 0;
  const dp = new Array(l1 + 1).fill("").map(() => new Array(l2 + 1).fill(0));
  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = 0;
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};
const A = [1, 2, 3, 2, 1],
  B = [3, 2, 1, 4, 7];
console.log(findLength(A, B));
