// var checkOnesSegment = function (s) {
//   let c = 0;
//   let v = 0;
//   for (const n of s) {
//     if (n === "1") {
//       if (c) return false;
//       v++;
//     } else {
//       if (v) {
//         c++;
//       }
//     }
//   }
//   return true;
// };
// console.log(checkOnesSegment("0011001"));
// var minElements = function (nums, limit, goal) {
//   const sum = nums.reduce((a, b) => a + b, 0);
//   const v = Math.abs(goal - sum);
//   return Math.ceil(v / limit);
// };
// const nums = [1, -10, 9, 1],
//   limit = 100,
//   goal = 0;
// console.log(minElements(nums, limit, goal));

// var countRestrictedPaths = function (n, edges) {
//   const mod = Math.pow(10, 9) + 7;
//   const map = new Map();
//   const wList = new Array(n + 1).fill(Infinity);
//   for (let i = 1; i <= n; i++) {
//     map.set(i, new Map());
//   }
//   for (const [i, j, w] of edges) {
//     map.get(i).set(j, w);
//     map.get(j).set(i, w);
//   }
//   const stack = [
//     {
//       w: 0,
//       node: n,
//     },
//   ];
//   while (stack.length) {
//     const item = stack.shift();
//     const next = map.get(item.node);
//     if (item.w >= wList[item.node]) continue;
//     wList[item.node] = item.w;
//     for (const [nex, v] of next.entries()) {
//       stack.unshift({
//         w: item.w + v,
//         node: nex,
//       });
//     }
//   }
//   const dp = new Array(n + 1).fill(0);
//   dp[n] = 1;
//   const nodeStack = new Array(n);
//   for (let i = 1; i <= n; i++) {
//     nodeStack[i - 1] = i;
//   }
//   nodeStack.sort((a, b) => wList[a] - wList[b]);
//   while (nodeStack.length) {
//     const item = nodeStack.shift();
//     for (const v of map.get(item).keys()) {
//       if (wList[item] < wList[v]) {
//         dp[v] = (dp[v] + dp[item]) % mod;
//       }
//     }
//   }
//   return dp[1];
// };
// const n = 7,
//   edges = [
//     [1, 3, 1],
//     [4, 1, 2],
//     [7, 3, 4],
//     [2, 5, 3],
//     [5, 6, 1],
//     [6, 7, 2],
//     [7, 5, 3],
//     [2, 6, 4],
//   ];
// console.log(countRestrictedPaths(n, edges));
