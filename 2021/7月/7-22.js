var numRollsToTarget = function (d, f, target) {
  const mod = Math.pow(10, 9) + 7;
  const dp = new Array(d + 1).fill("").map(() => new Array(target + 1).fill(0));
  for (let i = 1; i <= f && i <= target; i++) {
    dp[1][i] = 1;
  }
  for (let i = 2; i <= d; i++) {
    dp[i][i] = 1;
    for (let j = i + 1; j <= target; j++) {
      for (let k = 1; k <= f && j - k >= 0; k++) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % mod;
      }
    }
  }

  return dp[d][target];
};
console.log(numRollsToTarget(30, 30, 500));
