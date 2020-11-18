// var kthLargest = function (root, k) {
//   let res;
//   const search = (root) => {
//     if (res !== undefined) return;
//     if (!root) return;
//     search(root.right);
//     k--;
//     if (!k && res === undefined) {
//       res = root.val;
//     }
//     search(root.left);
//   };
//   search(root);
//   return res;
// };
// const a = {
//   b: {
//     c: 1,
//   },
// };
// const copy = Object.assign({}, a);
// copy.b === a.b; //true
var pacificAtlantic = function (matrix) {
  const res = [];
  const h = matrix.length;
  if (!h) return res;
  const w = matrix[0].length;
  const dx = new Set();
  const tp = new Set();
  for (let i = 0; i < w; i++) {
    dfs(tp, 0, i);
  }
  for (let i = 0; i < h; i++) {
    dfs(tp, i, 0);
  }
  for (let i = 0; i < w; i++) {
    dfs(dx, h - 1, w - 1 - i);
  }
  for (let i = 0; i < h; i++) {
    dfs(dx, h - 1 - i, w - 1);
  }
  const dfs = (set, i, j) => {
    if (i < 0 || j >= w) return;
    if (set.has(`${i}-${j}`)) return;
    set.add(`${i}-${j}`);
    if (matrix[i]?.[j] <= matrix[i]?.[j - 1]) {
      dfs(set, i, j - 1);
    }
    if (matrix[i]?.[j] <= matrix[i]?.[j + 1]) {
      dfs(set, i, j + 1);
    }
    if (matrix[i]?.[j] <= matrix[i + 1]?.[j]) {
      dfs(set, i + 1, j);
    }
    if (matrix[i]?.[j] <= matrix[i - 1]?.[j]) {
      dfs(set, i - 1, j);
    }
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (dx.has(`${i}-${j}`) && tp.has(`${i}-${j}`)) {
        res.push([i, j]);
      }
    }
  }
  return res;
};
const matrix = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
console.log(pacificAtlantic(matrix));
