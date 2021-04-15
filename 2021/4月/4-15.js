var maximalRectangle = function (matrix) {
  let max = 0;
  const h = matrix.length;
  if (!h) return 0;
  const w = matrix[0].length;
  const dp = new Array(h).fill("").map(() => new Array(w).fill(0));
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (matrix[i][j] === "1") {
        dp[i][j] = (dp[i][j - 1] || 0) + 1;
      }
    }
  }

  for (let i = h - 1; i >= 0; i--) {
    for (let j = 0; j < w; j++) {
      let curW = dp[i][j];
      let k = i;
      while (k >= 0 && matrix[k][j] == 1) {
        curW = Math.min(dp[k][j], curW);
        max = Math.max(max, curW * (i - k + 1));
        k--;
      }
    }
  }
  return max;
};
const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
console.log(maximalRectangle(matrix));
