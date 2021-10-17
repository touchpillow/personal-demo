var longestIncreasingPath = function (matrix) {
  const h = matrix.length;
  const w = matrix[0].length;
  const dp = new Array(h).fill("").map(() => new Array(w).fill(1));
  const stack = [];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      stack.push([i, j]);
    }
  }
  stack.sort(([a, b], [c, d]) => matrix[a][b] - matrix[c][d]);
  let max = 0;
  const getValue = (i, j, x, y) => {
    if (i < 0 || i >= h) return 0;
    if (j < 0 || j >= w) return 0;
    // return dp[i][j];
    if (matrix[i][j] >= matrix[x][y]) return;
    dp[x][y] = Math.max(dp[x][y], 1 + dp[i][j]);
  };
  for (let i = 0; i < h * w; i++) {
    const [x, y] = stack[i];
    getValue(x + 1, y, x, y);
    getValue(x - 1, y, x, y);
    getValue(x, y + 1, x, y);
    getValue(x, y - 1, x, y);
    max = Math.max(max, dp[x][y]);
  }
  return max;
};
