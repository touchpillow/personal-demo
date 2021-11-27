var numSubmat = function (mat) {
  const h = mat.length;
  const w = mat[0].length;
  const dp = new Array(h + 1).fill("").map(() => new Array(w + 1).fill(0));
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      if (!mat[i - 1][j - 1]) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i][j - 1] + mat[i - 1][j - 1];
      }
    }
  }
  let c = 0;
  for (let i = 0; i < w; i++) {
    let count = 0;
    for (let j = 0; j < h; j++) {
      if (mat[j][i]) {
        count++;
      } else {
        count = 0;
      }
      c += dp[j + 1][i + 1] * count;
    }
  }
  return c;
};
const mat = [
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 1, 1, 0],
];
console.log(numSubmat(mat));
