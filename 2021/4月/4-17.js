var numDistinct = function (s, t) {
  if (s.length === t.length) {
    return s === t ? 1 : 0;
  }
  const l1 = s.length;
  const l2 = t.length;
  const dp = new Array(l1 + 1).fill("").map(() => new Array(l2 + 1).fill(0));
  for (let i = 0; i <= l2; i++) {
    dp[0][i] = 0;
  }
  for (let i = 0; i <= l1; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (t[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[l1][l2];
};
