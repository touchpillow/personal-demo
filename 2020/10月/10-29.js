// var finalPrices = function (prices) {
//   const l = prices.length;
//   const res = new Array(l).fill(0);
//   for (let i = 0; i < l - 1; i++) {
//     for (let j = i + 1; j < l; j++) {
//       if (prices[j] <= prices[i]) {
//         res[i] = prices[j];
//         break;
//       }
//     }
//   }
//   for (let i = 0; i < l; i++) {
//     res[i] = prices[i] - res[i];
//   }
//   return res;
// };
// var runningSum = function (nums) {
//   const l = nums.length;
//   for (let i = 1; i < l; i++) {
//     nums[i] = nums[i] + nums[i - 1];
//   }
//   return nums;
// };
var getMoneyAmount = function (n) {
  let dp = Array.from(new Array(n + 1), () =>
    new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  );
  // 初始化状态
  dp[0][1] = 0;
  for (let i = 0; i <= n; i++) {
    dp[i][i] = 0;
  }
  // 状态转移
  // 猜从 1 -> i 的值设为 x 有3种可能
  // 1 x是答案, 2 小于x -> x + dp[0][x - 1],    3 大于x -> x + dp[x + 1][n];
  for (let x = n; x >= 0; x--) {
    for (let y = x; y <= n; y++) {
      for (let k = x + 1; k < y; k++) {
        dp[x][y] = Math.min(dp[x][y], Math.max(dp[x][k - 1], dp[k + 1][y]) + k);
      }
    }
  }
  return dp[0][n];
};
console.log(getMoneyAmount(10));
