// var makeConnected = function (n, connections) {
//   if (connections.length < n - 1) return -1;
//   const dp = new Array(n).fill(false);
//   const map = new Map();
//   for (const [i, j] of connections) {
//     if (!map.has(i)) map.set(i, []);
//     if (!map.has(j)) map.set(j, []);
//     map.get(i).push(j);
//     map.get(j).push(i);
//   }
//   let c = 0;
//   const dfs = (i) => {
//     if (dp[i]) return;
//     dp[i] = true;
//     const next = map.get(i) ?? [];
//     next.forEach((i) => dfs(i));
//   };
//   for (let i = 0; i < n; i++) {
//     if (dp[i]) continue;
//     c++;
//     dfs(i);
//   }
//   return c - 1;
// };
var makeConnected = function (n, connections) {
  if (connections.length < n - 1) return -1;
  const dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = i;
  }
  const dfs = (n) => {
    while (dp[n] !== n) {
      n = dp[n];
    }
    return n;
  };
  for (const [i, j] of connections) {
    const min = Math.min(i, j);
    const max = Math.max(i, j);
    const v1 = dfs(min);
    const v2 = dfs(max);
    dp[v2] = v1;
  }
  const set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(dfs(i));
  }
  return set.size - 1;
};
