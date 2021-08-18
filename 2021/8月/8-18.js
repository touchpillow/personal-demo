var countSquares = function (matrix) {
  const h = matrix.length;
  const w = matrix[0].length;
  let c = 0;
  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      if (matrix[i][j]) {
        matrix[i][j] =
          Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) +
          1;
      }
      c += matrix[i][j];
    }
  }
  c = matrix[0].reduce((a, b) => a + b, c);
  for (let i = 1; i < h; i++) {
    c += matrix[i][0];
  }
  return c;
};
