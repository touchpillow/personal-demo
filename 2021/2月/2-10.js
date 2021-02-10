var new21Game = function (N, K, W) {
  const dp = new Array(N + 1).fill(0);
  const preSum = new Array(N + 1).fill(0);

  dp[0] = preSum[0] = 1;

  for (let i = 1; i < N + 1; i++) {
    if (i - W <= 0) {
      // 被减的前缀区间消失
      if (i <= K) {
        // 当前分数i没有超过K
        dp[i] = preSum[i - 1] / W;
      } else {
        // 当前分数i超过了K，i取K
        dp[i] = preSum[K - 1] / W;
      }
    } else {
      // 正常的两个前缀区间相减
      if (i <= K) {
        // 当前分数i没有超过K
        dp[i] = (preSum[i - 1] - preSum[i - W - 1]) / W;
      } else {
        // 当前分数i超过了K，i取K
        dp[i] = (preSum[K - 1] - preSum[i - W - 1]) / W;
      }
    }
    preSum[i] = preSum[i - 1] + dp[i];
  }

  return preSum[N] - preSum[K - 1];
};
const new21Game = (N, K, W) => {
  // dp[i]：拿到分数 i 的概率
  const dp = new Array(N + 1).fill(0);
  // 没玩游戏时分数是0，所以拿0分的概率是1
  dp[0] = 1;
  for (let i = 1; i < N + 1; i++) {
    // 遍历区间 [i-W,i-1]
    for (let j = i - W; j <= i - 1; j++) {
      // j>=0时，dp[j]才有意义; 分数i要<=K，所以j+1要<=K
      if (j >= 0 && j + 1 <= K) {
        // 对区间[i-W,i-1]的概率进行累加
        dp[i] += (1 / W) * dp[j];
      }
    }
  }
  let res = 0;
  // 分数落在[K,N]的概率 累加
  for (let i = K; i <= N; i++) {
    res += dp[i];
  }
  return res;
};
