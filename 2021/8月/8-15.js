var countServers = function (grid) {
  const h = grid.length;
  const w = grid[0].length;
  const map = new Map();
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!grid[i][j]) continue;
      map.set(`row-${i}`, (map.get(`row-${i}`) || 0) + 1);
      map.set(`column-${j}`, (map.get(`column-${j}`) || 0) + 1);
    }
  }
  let c = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!grid[i][j]) continue;
      if (map.get(`row-${i}`) !== 1 || map.get(`column-${j}`) !== 1) {
        c++;
      }
    }
  }
  return c;
};
