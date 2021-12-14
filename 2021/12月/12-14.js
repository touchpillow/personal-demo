var maximalNetworkRank = function (n, roads) {
  const set = new Set();
  const map = new Map();
  for (const [a, b] of roads) {
    set.add(`${a}-${b}`);
    set.add(`${b}-${a}`);
    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) + 1);
  }

  let max = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      max = Math.max(
        max,
        (map.get(i) || 0) + (map.get(b) || 0) - Number(set.has(`${i}-${j}`))
      );
    }
  }
  return max;
};
