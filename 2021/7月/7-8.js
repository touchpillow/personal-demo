var shortestPathBinaryMatrix = function (grid) {
  const l = grid.length;
  let cur = [[0, 0]];
  if (grid[0][0] === 1) return -1;
  grid[0][0] = -1;
  let step = 1;
  const xOffset = [-1, -1, -1, 0, 0, 1, 1, 1];
  const yOffset = [-1, 0, 1, -1, 1, -1, 0, 1];
  while (true) {
    if (!cur.length) return -1;
    const next = [];
    const setState = (x, y) => {
      if (x < 0 || x >= l) return;
      if (y < 0 || y >= l) return;
      if (grid[x][y] === -1) return;
      if (grid[x][y] === 1) return;
      grid[x][y] = -1;
      next.push([x, y]);
    };
    for (const [x, y] of cur) {
      if (x === l - 1 && y === l - 1) return step;
      for (let i = 0; i < 8; i++) {
        setState(x + xOffset[i], y + yOffset[i]);
      }
    }
    step++;
    cur = next;
  }
};
