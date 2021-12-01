var maxProbability = function (n, edges, succProb, start, end) {
  const values = new Array(n).fill(0);
  const map = new Map();
  edges.forEach(([a, b], i) => {
    if (!map.has(a)) {
      map.set(a, new Map());
    }
    if (!map.has(b)) {
      map.set(b, new Map());
    }
    map.get(a).set(b, succProb[i]);
    map.get(b).set(a, succProb[i]);
  });

  const dfs = (pre, value) => {
    if (values[pre] >= value) return;
    if (!value) return;
    values[pre] = value;
    if (!map.has(pre)) return;
    for (const next of map.get(pre).keys()) {
      dfs(next, value * map.get(pre).get(next));
    }
  };
  dfs(start, 1);
  return values[end];
};
const n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
  succProb = [0.5, 0.5, 0.3],
  start = 0,
  end = 2;

console.log(maxProbability(n, edges, succProb, start, end));
