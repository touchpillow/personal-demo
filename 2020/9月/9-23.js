// var allCellsDistOrder = function (R, C, r0, c0) {
//   const res = new Array(R).fill("").map(() => new Array(C));
//   for (let i = 0; i < R; i++) {
//     for (let j = 0; j < C; j++) {
//       res[i][j] = [i, j];
//     }
//   }
//   res = res.flat();
//   return res.sort(
//     (a, b) =>
//       Math.abs(a[0] - r0) +
//       Math.abs(a[1] - c0) -
//       Math.abs(b[0] - r0) -
//       Math.abs(b[1] - c0)
//   );
// };
// var numMovesStones = function (a, b, c) {
//   const res = [a, b, c].sort((a, b) => a - b);
//   const left = res[1] - res[0] - 1;
//   const right = res[2] - res[1] - 1;
//   let min = 0;
//   let max = left + right;
//   if (left || right) {
//     if (left > 1 && right > 1) {
//       min = 2;
//     } else {
//       min = 1;
//     }
//   }
//   return [min, max];
// };
var kthSmallest = function (root, k) {
  let v = 0;
  let res;
  const search = (root) => {
    if (v == k) return;
    if (!root) return;
    search(root.left);
    v++;
    if (v == k) {
      res = root.val;
    }
    search(root.right);
  };
  return res;
};
