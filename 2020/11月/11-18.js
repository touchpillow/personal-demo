// var countBattleships = function (board) {
//   const h = matrix.length;
//   if (!h) return 0;
//   const w = matrix[0].length;
//   let c = 0;
//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       if (board[i][j] == "X") {
//         c++;
//         dfs(i, j);
//       }
//     }
//   }
//   function dfs(i, j) {
//     if (i < 0 || i >= h) return;
//     if (j < 0 || j >= w) return;
//     if (board[i][j] == "X") {
//       board[i][j] = ".";
//       dfs(i + 1, j);
//       dfs(i - 1, j);
//       dfs(i, j - 1);
//       dfs(i, j + 1);
//     }
//   }
//   return c;
// };
// var countBattleships = function (board) {
//   const h = board.length;
//   if (!h) return 0;
//   const w = board[0].length;
//   let c = 0;
//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       if (
//         board[i][j] == "X" &&
//         board[i - 1]?.[j] !== "X" &&
//         board[i][j - 1] !== "X"
//       )
//         c++;
//     }
//   }
//   return c;
// };
var isBalanced = function (root) {};
