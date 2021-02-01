// var allPathsSourceTarget = function (graph) {
//   const res = [];
//   const l = graph.length;
//   const dfs = (i, pre) => {
//     if (i === l - 1) {
//       res.push(pre.concat(i));
//       return;
//     }
//     const next = graph[i];
//     if (!next.length) return;
//     next.forEach((item) => {
//       dfs(item, pre.concat(i));
//     });
//   };
//   dfs(0, []);
//   return res;
// };
var champagneTower = function (poured, query_row, query_glass) {
  const dp = new Array(query_glass + 2).fill(0);
  dp[0] = poured;
  for (let i = 0; i < query_row; i++) {
    for (let j = Math.min(i, query_glass); j >= 0; j--) {
      const v = dp[j];
      dp[j] = 0;
      if (v > 1) {
        dp[j] += (v - 1) / 2;
        dp[j + 1] += (v - 1) / 2;
      }
    }
  }
  return dp[query_glass];
};
console.log(champagneTower(1, 1, 0));
