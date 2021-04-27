var minCut = function (s) {
  const l = s.length;
  const dp = new Array(l).fill("").map(() => new Array(l).fill(true));
  for (let i = 0; i < l; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (s[i] !== s[j]) {
        dp[j][i] = false;
      } else {
        dp[j][i] = dp[j + 1][i - 1] !== false;
      }
    }
  }
  const dp2 = new Array(l).fill(0);
  for (let i = 1; i < l; i++) {
    dp2[i] = i;
  }
  for (let i = 1; i < l; i++) {
    if (dp[0][i]) {
      dp2[i] = 0;
    } else {
      for (let j = 0; j < i; j++) {
        if (dp[j + 1][i]) {
          dp2[i] = Math.min(dp2[j] + 1, dp2[i]);
        }
      }
    }
  }
  console.log(dp);
  console.log(dp2);
  return dp2[l - 1];
};
const a = "cabababcbc";
console.log(minCut(a));
