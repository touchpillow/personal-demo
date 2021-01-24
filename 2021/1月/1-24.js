// var orderOfLargestPlusSign = function (N, mines) {
//   const matrix = new Array(N).fill("").map(() => new Array(N).fill(1));
//   const dp = new Array(N)
//     .fill("")
//     .map(() => new Array(N).fill("").map(() => [0, 0, 0, 0]));
//   for (const [i, j] of mines) {
//     matrix[i][j] = 0;
//   }
//   for (let i = 0; i < N; i++) {
//     for (let j = 1; j < N; j++) {
//       dp[i][j][0] = matrix[i][j - 1] === 1 ? dp[i][j - 1][0] + 1 : 0;
//       dp[i][N - 1 - j][2] = matrix[i][N - j] === 1 ? dp[i][N - j][2] + 1 : 0;
//     }
//   }
//   for (let j = 0; j < N; j++) {
//     for (let i = 1; i < N; i++) {
//       dp[i][j][1] = matrix[i - 1][j] === 1 ? dp[i - 1][j][1] + 1 : 0;
//       dp[N - 1 - i][j][3] = matrix[N - i][j] === 1 ? dp[N - i][j][3] + 1 : 0;
//     }
//   }
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       dp[i][j] = Math.min(...dp[i][j]);
//     }
//   }
//   let max = 0;
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       if (matrix[i][j] === 0) continue;
//       max = Math.max(max, dp[i][j] + 1);
//     }
//   }
//   return max;
// };
// const N = 5,
//   mines = [[4, 2]];
// console.log(orderOfLargestPlusSign(N, mines));
var reorganizeString = function (S) {
  const l = S.length;
  const list = new Array(26).fill(0);
  for (const s of S) {
    list[s.charCodeAt() - 97]++;
  }
  const max = Math.max(...list);
  const num = list.filter((item) => item === max).length;
};
