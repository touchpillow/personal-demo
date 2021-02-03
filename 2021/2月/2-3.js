// var maxIncreaseKeepingSkyline = function (grid) {
//   const h = grid.length;
//   const w = grid[0].length;
//   const hmax = new Array(h).fill(0);
//   const wmax = new Array(w).fill(0);
//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       hmax[i] = Math.max(hmax[i], grid[i][j]);
//       wmax[j] = Math.max(wmax[j], grid[i][j]);
//     }
//   }
//   let c = 0;
//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       c += Math.min(hmax[i], wmax[j]) - grid[i][j];
//     }
//   }
//   return c;
// };
var soupServings = function (N) {
  let num = Math.ceil(N / 25);
  if (num >= 500) {
    return 1.0;
  }
  const dp = new Array(num).fill("").map(() => new Array(num).fill(0));
  dp[0][0] = 0.5;
  for (let i = 1; i <= num; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      dp[i][j] =
        0.25 *
        (dp[i - 4 > 0 ? i - 4 : 0][j] +
          dp[i - 3 > 0 ? i - 3 : 0][j - 1 > 0 ? j - 1 : 0] +
          dp[i - 2 > 0 ? i - 2 : 0][j - 2 > 0 ? j - 2 : 0] +
          dp[i - 1 > 0 ? i - 1 : 0][j - 3 > 0 ? j - 3 : 0]);
    }
  }
  return dp[num][num];
};
