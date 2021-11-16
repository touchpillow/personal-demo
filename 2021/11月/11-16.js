var minReorder = function (n, connections) {
  const fromMap = new Map();
  const toMap = new Map();
  for (const [from, to] of connections) {
    if (!fromMap.has(from)) {
      fromMap.set(from, []);
    }
    fromMap.get(from).push(to);
    if (!toMap.has(to)) {
      toMap.set(to, []);
    }
    toMap.get(to).push(from);
  }
  let c = 0;
  const isArrived = new Array(n).fill(false);
  console.log(fromMap, toMap);
  const dfs = (from, n = 0) => {
    if (isArrived[from]) return;
    isArrived[from] = true;
    const nexts = fromMap.get(from) || [];
    c += n;
    const noNexts = toMap.get(from) || [];

    nexts.forEach((item) => {
      dfs(item, 1);
    });
    noNexts.forEach((item) => {
      dfs(item, 0);
    });
  };
  dfs(0);
  return c;
};
const n = 6,
  connections = [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ];
console.log(minReorder(n, connections));
