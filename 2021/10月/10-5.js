var maxCoins = function (nums) {
  const l = nums.length;
  const dp = new Array(l + 2).fill("").map(() => new Array(l + 2).fill(1));
  for (let i = 0; i < l + 2; i++) {
    for (let j = i - 2; j--; j >= 0) {
      for (let k = j + 1; k < j; k++) {
        let v = nums[k] * nums[i] * nums[j];
        v += dp[i][k] + dp[k][j];
        dp[i][j] = Math.max(v, dp[i][j]);
      }
    }
  }
  return dp[0][l + 1];
};
