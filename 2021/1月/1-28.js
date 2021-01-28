// var isBipartite = function (graph) {
//   const l = graph.length;
//   const list = new Array(l).fill(0);
//   const set = new Set();
//   const dfs = (i, v) => {
//     set.add(i);
//     if (list[i] !== 0 && list[i] !== v) {
//       console.log(i, v, list);
//       list[i] = 2;
//       return;
//     } else if (list[i] === v) {
//       return;
//     }
//     list[i] = v;
//     graph[i].forEach((item) => {
//       dfs(item, -1 * v);
//     });
//   };
//   for (let i = 0; i < l; i++) {
//     if (set.has(i)) continue;
//     if (!graph[i].length) return false;
//     dfs(i, 1);
//   }
//   return !list.some((item) => item === 2);
// };
// const a = [
//   [1, 3],
//   [0, 2],
//   [1, 3],
//   [0, 2],
// ];
// console.log(isBipartite(a));
var findCheapestPrice = function (n, flights, src, dst, K) {
  const map = new Map();
  for (const [start, end, v] of flights) {
    if (!map.has(start)) {
      map.set(start, new Map());
    }
    map.get(start).set(end, v);
  }
  const dp = new Array(n).fill(Infinity);
  console.log(map);
  const dfs = (start, pre, k) => {
    if (k > K) return;
    const srcs = map.get(start);
    for (const [end, v] of srcs.entries()) {
      const cur = pre + v;
      console.log(start, end, cur, k);
      if (dp[end] <= cur) continue;
      dp[end] = cur;
      if (end === dst) continue;
      dfs(end, cur, k + 1);
    }
  };
  dfs(src, 0, 0);
  return dp[dst] === Infinity ? -1 : dp[dst];
};
const n = 4,
  edges = [
    [0, 1, 1],
    [0, 2, 5],
    [1, 2, 1],
    [2, 3, 1],
  ],
  src = 0,
  dst = 3,
  k = 1;
console.log(findCheapestPrice(n, edges, src, dst, k));
