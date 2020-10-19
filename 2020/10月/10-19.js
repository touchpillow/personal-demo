// var rob = function (root) {
//   if (!root) return 0;
//   const search = (root) => {
//     if (!root) return;
//     search(root.left);
//     search(root.right);
//     const left1 = root.left ? root.left.v1 : 0;
//     const left2 = root.left ? root.left.v2 : 0;
//     const right1 = root.right ? root.right.v1 : 0;
//     const right2 = root.right ? root.right.v2 : 0;
//     root.v1 = left2 + right2;
//     root.v2 = Math.max(left1, left2) + Math.max(right1, right2);
//   };
//   search(root);
//   return Math.max(root.v1, root.v2);
// };
// var generateTheString = function (n) {
//   if (n % 2) {
//     return "a".repeat(n);
//   } else {
//     return "a".repeat(n - 1) + "b";
//   }
// };
var luckyNumbers = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const row = matrix.map((item) => Math.min(...item));
  const column = new Array(n).fill(-Infinity);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      column[j] = Math.max(column[j], matrix[i][j]);
    }
  }
  const res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == row[i] && matrix[i][j] == column[j]) {
        res.push(matrix[i][j]);
      }
    }
  }
  return res;
};
