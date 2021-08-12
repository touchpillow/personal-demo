var closedIsland = function (grid) {
  const h = grid.length;
  const w = grid[0].length;
  let res = 0;
  const dfs = (i, j) => {
    if (i < 0 || i >= h) return 1;
    if (j < 0 || j >= w) return 1;
    if (grid[i][j] === 1) return 0;
    grid[i][j] = 1;
    return dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
  };
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {}
  }
  return res;
};
