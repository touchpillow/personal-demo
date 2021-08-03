var queensAttacktheKing = function (queens, king) {
  const res = [];
  const set = new Set(queens.map(([a, b]) => `${a}-${b}`));
  const dfs = (i, j, x, y) => {
    if (i < 0 || i > 7) return 0;
    if (j < 0 || j > 7) return 0;
    if (set.has(`${i}-${j}`)) {
      res.push([i, j]);
      return;
    }
    dfs(i + x, j + y, x, y);
  };
  const [a, b] = king;
  dfs(a, b, 1, 0);
  dfs(a, b, 1, 1);
  dfs(a, b, 0, 1);
  dfs(a, b, -1, 1);
  dfs(a, b, -1, 0);
  dfs(a, b, -1, -1);
  dfs(a, b, 0, -1);
  dfs(a, b, 1, -1);
  return res;
};
