// var calcEquation = function (equations, values, queries) {
//   const map = {};
//   const l = equations.length;
//   for (let i = 0; i < l; i++) {
//     const [a, b] = equations[i];
//     dfs(values[i], a, b);
//     dfs(1 / values[i], b, a);
//   }
//   function dfs(v, a, b) {
//     if (map[a]) {
//       if (map[a][b] === undefined) {
//         map[a][b] = v;
//       }
//       const keys = Object.keys(map[a]);
//       keys.forEach((item) => {
//         if (item == b) return;
//         if (map[item][b] !== undefined) return;
//         const tempv = map[a][item];
//         dfs(v / tempv, item, b);
//       });
//     } else {
//       map[a] = {
//         [b]: v,
//       };
//     }
//   }
//   function getV(a, b) {
//     if (!map[a] || !map[b]) return -1;
//     if (a == b) return 1;
//     if (map[a][b] === undefined && map[b][a] === undefined) return -1;
//     return map[a][b] === undefined ? map[b][a] : map[a][b];
//   }
//   console.log(map);
//   return queries.map((item) => getV(item[0], item[1]));
// };
// const equations = [
//     ["x1", "x2"],
//     ["x2", "x3"],
//     ["x3", "x4"],
//     ["x4", "x5"],
//   ],
//   values = [3.0, 4.0, 5.0, 6.0],
//   queries = [
//     ["x1", "x5"],
//     ["x5", "x2"],
//     ["x2", "x4"],
//     ["x2", "x2"],
//     ["x2", "x9"],
//     ["x9", "x9"],
//   ];
// console.log(calcEquation(equations, values, queries));
// var hammingWeight = function (n) {
//   const s = n.toString(2);
//   return [...s].filter((i) => i == "1").length;
// };
var printNumbers = function (n) {
  const max = Math.pow(10, n);
  const res = new Array(max - 1);
  for (let i = 1; i < max - 1; i++) {
    res[i] = i + 1;
  }
  return res;
};
