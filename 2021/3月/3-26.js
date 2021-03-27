// var queryString = function (S, N) {
//   for (let i = 1; i <= N; i++) {
//     if (!S.includes(i.toString(2))) {
//       return false;
//     }
//   }
//   return true;
// };
// var nextLargerNodes = function (head) {
//   const nums = [];
//   while (head) {
//     nums.push(head.val);
//     head = head.next;
//   }
//   const res = [0];
//   const stack = [nums.pop()];
//   while (nums.length) {
//     const item = nums.pop();
//     while (stack.length && item >= stack[0]) {
//       stack.shift();
//     }
//     if (!stack.length) {
//       res.unshift(0);
//     } else {
//       res.unshift(stack[0]);
//     }
//     stack.unshift(item);
//   }
//   return res;
// };
// var numEnclaves = function (grid) {
//   const h = grid.length;
//   const w = grid[0].length;
//   const dfs = (i, j) => {
//     if (i < 0 || i >= h) return;
//     if (j < 0 || j >= w) return;
//     if (grid[i][j] === 0) return;
//     grid[i][j] = 0;
//     dfs(i, j + 1);
//     dfs(i, j - 1);
//     dfs(i + 1, j);
//     dfs(i - 1, j);
//   };
//   for (let i = 0; i < w; i++) {
//     dfs(0, i);
//     dfs(h - 1, i);
//   }
//   for (let i = 0; i < h; i++) {
//     dfs(i, 0);
//     dfs(i, w - 1);
//   }
//   let c = 0;
//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       if (grid[i][j]) c++;
//     }
//   }
//   return c;
// };
var uniquePaths = function (m, n) {};
