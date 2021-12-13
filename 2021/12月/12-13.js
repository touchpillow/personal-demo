var restoreMatrix = function (rowSum, colSum) {
  const h = rowSum.length;
  const w = colSum.length;
  const res = new Array(h).fill("").map(() => new Array(w).fill(0));
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      res[i][j] = Math.min(rowSum[i], colSum[j]);
      rowSum[i] -= res[i][j];
      colSum[j] -= res[i][j];
    }
  }
  return res;
};
