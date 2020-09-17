// var maximalSquare = function (matrix) {
//   const h = matrix.length;
//   if (!h) return 0;
//   const w = matrix[0].length;
//   const res = new Array(h).fill("").map((i) => new Array(w).fill(0));
//   let result = 0;
//   for (let i = 0; i < h; i++) {
//     res[i][0] = matrix[i][0];
//     result = Math.max(res[i][0], result);
//   }
//   for (let i = 0; i < w; i++) {
//     res[0][i] = matrix[0][i];
//     result = Math.max(res[0][i], result);
//   }
//   for (let i = 1; i < h; i++) {
//     for (let j = 1; j < w; j++) {
//       if (matrix[i][j] == "1") {
//         res[i][j] =
//           Math.min(res[i - 1][j - 1], res[i - 1][j], res[i][j - 1]) + 1;
//         result = Math.max(res[i][j], result);
//       }
//     }
//   }
//   return result * result;
// };
// var isCousins = function (root, x, y) {
//   const data = [];
//   const search = (root, level = 0) => {
//     if (!root) return;
//     if (!data[level]) {
//       data[level] = new Set();
//     }
//     data[level].add(root.val);
//     search(root.left, level + 1);
//     search(root.right, level + 1);
//   };
//   search(root);
//   return data.some((i) => i.has(x) && i.has(y));
// };
// const a = {
//   val: 1,
//   left: {
//     val: 2,
//   },
//   right: {
//     val: 3,
//     right: {
//       val: 4,
//     },
//   },
// };
// console.log(isCousins(a, 2, 3));
// var findJudge = function (N, trust) {
//   const l1 = new Array(N + 1).fill(0);
//   const l2 = new Array(N + 1).fill(0);
//   for (const [a, b] of trust) {
//     l1[b]++;
//     l2[a]++;
//   }
//   for (let i = 0; i <= N; i++) {
//     if (l1[i] == N - 1 && !l2[i]) return true;
//   }
//   return false;
// };
var isCousins = function (root, x, y) {
  const map = new Map();
  let xLevel = NaN;
  let yLevel = NaN;
  const search = (root, level, parent) => {
    if (!root) return;
    if (root.val == x) {
      xLevel = level;
      map.set(x, parent);
    } else if (root.val == y) {
      yLevel = level;
      map.set(y, parent);
    }
    search(root.left, level + 1, root);
    search(root.right, level + 1, root);
  };
  search(root, 0, null);
  return xLevel === yLevel && map.get(x) !== map.get(y);
};
