var minTime = function (n, edges, hasApple) {
  const map = new Map();

  for (const [from, to] of edges) {
    if (map.has(to)) {
      map.set(from, to);
    } else {
      map.set(to, from);
    }
  }
  let c = 0;
  const set = new Set();
  const searchParent = (i) => {
    if (!i) return;
    if (set.has(i)) return;
    c += 2;
    set.add(i);
    searchParent(map.get(i));
  };
  for (let i = 0; i < n; i++) {
    if (!hasApple[i]) continue;
    searchParent(i);
  }

  return c;
};
const n = 4,
  edge = [
    [0, 2],
    [0, 3],
    [1, 2],
  ],
  v = [false, true, false, false];
console.log(minTime(n, edge, v));
