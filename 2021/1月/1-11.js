// var checkValidString = function (s) {
//   const stack = [];
//   const v = [];
//   const l = s.length;
//   for (let i = 0; i < l; i++) {
//     if (s[i] === "(") {
//       stack.push(i);
//     } else if (s[i] === "*") {
//       v.push(i);
//     } else {
//       if (!stack.length && !v.length) return false;
//       if (stack.length) {
//         stack.pop();
//       } else {
//         v.pop();
//       }
//     }
//   }
//   while (stack.length && v.length) {
//     if (stack[stack.length - 1] > v[v.length - 1]) return false;
//     stack.pop();
//     v.pop();
//   }
//   return !stack.length;
// };
// const s = "(*))";
// console.log(checkValidString(s));
var findRedundantConnection = function (edges) {
  const l = edges.length;
  const flag = new Array(l + 1);
  for (let i = 0; i < l + 1; i++) {
    flag[i] = [i];
  }
  const findFn = (v) => {
    while (v !== flag[v]) v = flag[v];
    return v;
  };
  for (const [start, end] of edges) {
    if (findFn(start) === findFn(end)) return [start, end];
    flag[findFn(start)] = flag[findFn(end)];
  }
};
const edges = [
  [1, 4],
  [3, 4],
  [1, 3],
  [1, 2],
  [4, 5],
];
console.log(findRedundantConnection(edges));
