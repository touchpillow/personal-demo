// var escapeGhosts = function (ghosts, target) {
//   const distance = ghosts.map(
//     (item) => Math.abs(item[0] - target[0]) + Math.abs(item[1] - target[1])
//   );
//   return distance.every(
//     (item) => item < Math.abs(target[0]) + Math.abs(target[1])
//   );
// };
// var numTilings = function (N) {
//   const mod = Math.pow(10, 9) + 7;
//   const dp1 = new Array(N + 1).fill(0);
//   const dp2 = new Array(N + 1).fill(0);
//   dp1[1] = 1;
//   dp1[2] = 2;
//   dp2[2] = 2;
//   for (let i = 3; i <= N; i++) {
//     dp1[i] = (dp1[i - 1] + dp1[i - 2] + dp2[i - 2]) % mod;
//     dp2[i] = (dp[i - 2] * 2 + dp2[i - 1]) % mod;
//   }
//   return dp1[N];
// };
var findCheapestPrice = function (n, flights, src, dst, K) {
  const map = new Map();
  for (const [start, end, v] of flights) {
    if (!map.has(start)) {
      map.set(start, new Map());
    }
    map.get(start).set(end, v);
  }
  const dp = new Array(n).fill("").map(() => new Array(K + 1).fill(Infinity));
  const dfs = (start, pre, k) => {
    if (k > K) return;
    const srcs = map.get(start);
    if (!srcs) return;
    for (const [end, v] of srcs.entries()) {
      const cur = pre + v;
      if (dp[end][k] <= cur) continue;
      dp[end][k] = cur;
      if (end === dst) continue;
      dfs(end, cur, k + 1);
    }
  };
  dfs(src, 0, 0);
  const min = Math.min(...dp[dst]);
  return min === Infinity ? -1 : min;
};
