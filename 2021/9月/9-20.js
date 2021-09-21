var maxProfit = function (k, prices) {
  const l = prices.length;
  if (!l) return 0;
  //dp1[i]表示当前持有股票
  //dp1[i][k]表示是第k轮交易
  const dp1 = new Array(k + 1).fill(-Infinity);
  dp1[1] = -1 * prices[0];
  dp1[0] = -1 * prices[0];
  //dp2[i]表示当前不持有
  const dp2 = new Array(k + 1).fill(-Infinity);

  dp2[0] = 0;

  for (let i = 1; i < l; i++) {
    // dp1[i][1] = -1 * prices[i];
    for (let j = 1; j <= k && j <= (i + 2) / 2; j++) {
      if (j <= (i + 1) / 2) {
        dp2[j] = Math.max(dp1[j] + prices[i], dp2[j]);
      }
      dp1[j] = Math.max(dp2[j - 1] - prices[i], dp1[j]);
    }
  }

  return Math.max(...dp2);
};
const k = 2,
  prices = [2, 4, 1];
console.log(maxProfit(k, prices));
