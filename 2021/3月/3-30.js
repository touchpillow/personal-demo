// var colorBorder = function (grid, r0, c0, color) {
//   const h = grid.length;
//   const w = grid[0].length;
//   if (grid[r0][c0] === color) return grid;
//   const init = grid[r0][c0];
//   const points = [];
//   const set = new Set();
//   const dfs = (i, j) => {
//     if (i < 0 || i >= h) return 0;
//     if (j < 0 || j >= w) return 0;
//     if (set.has(`${i}-${j}`)) return 1;
//     if (grid[i][j] !== init) return 0;
//     set.add(`${i}-${j}`);
//     const count = dfs(i, j + 1) + dfs(i, j - 1) + dfs(i + 1, j) + dfs(i - 1, j);
//     if (count < 4) {
//       points.push([i, j]);
//     }
//     return 1;
//   };
//   dfs(r0, c0);
//   points.forEach((item) => {
//     grid[item[0]][item[1]] = color;
//   });
//   return grid;
// };
// const grid = [
//     [1, 2, 1, 2, 1, 2],
//     [2, 2, 2, 2, 1, 2],
//     [1, 2, 2, 2, 1, 2],
//   ],
//   r0 = 1,
//   c0 = 3,
//   color = 1;
// const res = [
//   [1, 1, 1, 1, 1, 2],
//   [1, 2, 1, 1, 1, 2],
//   [1, 1, 1, 1, 1, 2],
// ];
// console.log(colorBorder(grid, r0, c0, color));
// var maxUncrossedLines = function (A, B) {
//   const l1 = A.length;
//   const l2 = B.length;
//   const dp = new Array(l1 + 1).fill("").map(() => new Array(l2 + 1).fill(0));
//   for (let i = 1; i <= l1; i++) {
//     for (let j = 1; j <= l2; j++) {
//       if (A[i - 1] === B[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//       } else {
//         dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
//       }
//     }
//   }
//   return dp[l1][l2];
// };
// var maxUncrossedLines = function (A, B) {
//   const l1 = A.length;
//   const l2 = B.length;
//   const dp1 = new Array(l1 + 1).fill(0);
//   const dp2 = new Array(l1 + 1).fill(0);
//   for (let i = 1; i <= l1; i++) {
//     for (let j = 1; j <= l2; j++) {
//       if (A[i - 1] === B[j - 1]) {
//         dp2[j] = dp1[j - 1] + 1;
//       } else {
//         dp2[j] = Math.max(dp2[j - 1], dp1[j]);
//       }
//     }
//     for (let j = 1; j <= l2; j++) {
//       dp1[j] = dp2[j];
//       dp2[j] = 0;
//     }
//   }
//   return dp2[l2];
// };
// var maxAncestorDiff = function (root, min = root?.val, max = root.val) {
//   if (!root) return 0;
//   min = Math.min(min, root.val);
//   max = Math.max(max, root.val);
//   return Math.max(
//     max - min,
//     dfs(root.left, min, max),
//     dfs(root.right, min, max)
//   );
// };
var colorBorder = function (grid, r0, c0, color) {
  const h = grid.length;
  const w = grid[0].length;
  if (grid[r0][c0] === color) return grid;
  const init = grid[r0][c0];
  const points = new Set();
  const dfs = (i, j) => {
    if (i < 0 || i >= h) return 0;
    if (j < 0 || j >= w) return 0;
    if (grid[i][j] === 0) return 1;
    if (grid[i][j] !== init) return 0;
    grid[i][j] = 0;
    const count = dfs(i, j + 1) + dfs(i, j - 1) + dfs(i + 1, j) + dfs(i - 1, j);
    if (count < 4) {
      points.add(`${i}-${j}`);
    }
    return 1;
  };
  dfs(r0, c0);
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (Set.add(`${i}-${j}`)) {
        grid[i][j] = color;
      } else if (!grid[i][j]) {
        grid[i][j] = init;
      }
    }
  }
  return grid;
};
