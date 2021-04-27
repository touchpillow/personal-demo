// var maxProfit = function (prices) {
//   const l = prices.length;

//   let min = prices[0];

//   const left = new Array(l).fill(0);
//   const right = new Array(l).fill(0);
//   for (let i = 1; i < l; i++) {
//     left[i] = Math.max(left[i - 1], prices[i] - min);
//     min = Math.min(min, prices[i]);
//   }
//   let rightMax = prices[l - 1];
//   for (let i = l - 2; i >= 0; i--) {
//     right[i] = Math.max(right[i + 1], rightMax - prices[i]);
//     rightMax = Math.max(rightMax, prices[i]);
//   }
//   let max = 0;
//   for (let i = 0; i < l; i++) {
//     max = Math.max(max, left[i] + (right[i + 1] || 0));
//   }

//   return max;
// };
// const prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0];
// console.log(maxProfit(prices));
var maxProfit = function (prices) {
  const dp = new Array(4).fill(0);
  dp[0] = dp[2] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[3] = Math.max(dp[3], dp[2] + prices[i]);
    dp[2] = Math.max(dp[2], dp[1] - prices[i]);
    dp[1] = Math.max(dp[1], dp[0] + prices[i]);
    dp[0] = Math.max(dp[0], -prices[i]);
  }
  return dp[3];
};
