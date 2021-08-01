var countSpecialSubsequences = function (nums) {
  const mod = Math.pow(10, 9) + 7;
  const l = nums.length;
  const dp = [0, 0, 0];
  if (nums[0] === 0) {
    dp[0] = 1;
  }
  for (let i = 1; i < l; i++) {
    if (nums[i] === 0) {
      dp[0] = (2 * dp[0] + 1) % mod;
      //   dp[1] = dp[1];
      //   dp[2] = dp[2];
    } else if (nums[i] === 1) {
      dp[1] = (2 * dp[1] + dp[0]) % mod;
      //   dp[0] = dp[0];
      //   dp[2] = dp[2];
    } else {
      //   dp[0] = dp[0];
      //   dp[1] = dp[1];
      dp[2] = (2 * dp[2] + dp[1]) % mod;
    }
  }
  return dp[2];
};
