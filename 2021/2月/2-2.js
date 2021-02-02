var minSwap = function (A, B) {
  const l = A.length;
  let v1 = 0,
    v2 = 1;
  for (let i = 1; i < l; i++) {
    let n2 = Infinity,
      s2 = Infinity;
    if (A[i - 1] < A[i] && B[i - 1] < B[i]) {
      n2 = Math.min(n2, v1);
      s2 = Math.min(s2, v2 + 1);
    }
    if (A[i - 1] < B[i] && B[i - 1] < A[i]) {
      n2 = Math.min(n2, v1);
      s2 = Math.min(s2, v2 + 1);
    }
    v1 = n2;
    v2 = s2;
  }
  return Math.min(v1, v2);
};
// var eventualSafeNodes = function (graph) {
//   const res = [];
//   const l = graph.length;
//   const map = new Map();
//   const dp = graph.map((item) => new Set(item));
//   const stack = [];
//   for (let i = 0; i < l; i++) {
//     if (!graph[i].length) {
//       stack.push(i);
//     } else {
//       graph[i].forEach((item) => {
//         if (!map.has(item)) {
//           map.set(item, []);
//         }
//         map.get(item).push(i);
//       });
//     }
//   }
//   while (stack.length) {
//     const item = stack.shift();
//     res.push(item);
//     map.get(item).forEach((next) => {
//       dp[next].delete(item);
//       if (!dp[next].size) {
//         stack.push(next);
//       }
//     });
//   }
//   return res.sort((a, b) => a - b);
// };
// const graph = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []];
// console.log(eventualSafeNodes(graph));
