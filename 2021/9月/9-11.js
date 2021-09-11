var maximumGap = function (nums) {
  const l = nums.length;
  let min = Infinity,
    max = -1;

  for (const n of nums) {
    min = Math.min(min, n);
    max = Math.max(max, n);
  }
  if (l < 3) return max - min;
  let dp = new Array(l - 1);
  const d = Math.ceil((max - min) / (l - 1));
  if (!d) return 0;
  for (const n of nums) {
    const index = Math.floor((n - min) / d);
    if (!dp[index]) {
      dp[index] = [n, n];
    } else {
      dp[index][0] = Math.min(n, dp[index][0]);
      dp[index][1] = Math.max(n, dp[index][1]);
    }
  }
  dp = dp.filter((i) => i);
  let res = 0;
  for (let i = 1; i < l - 1; i++) {
    res = Math.max(res, dp[i][0] - dp[i - 1][1]);
  }
  return res;
};
