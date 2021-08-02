var getMaximumGold = function (grid) {
  const h = grid.length;
  const w = grid[0].length;
  const set = new Set();
  let max = 0;

  const dfs = (i, j, pre = 0) => {
    if (i < 0 || i >= h) {
      max = Math.max(max, pre);
      return;
    }
    if (j < 0 || j >= w) {
      max = Math.max(max, pre);
      return;
    }
    if (grid[i][j] === 0) {
      max = Math.max(max, pre);
      return;
    }
    if (grid[i][j] < 0) {
      return;
    }
    grid[i][j] *= -1;
    pre += grid[i][j];
    dfs(i, j + 1, pre);
    dfs(i, j - 1, pre);
    dfs(i - 1, j, pre);
    dfs(i + 1, j, pre);
    grid[i][j] *= -1;
  };
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      dfs(i, j);
    }
  }
  return max;
};
