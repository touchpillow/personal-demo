var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const map = new Map();
  for (const [pre, next] of prerequisites) {
    if (!map.has(next)) {
      map.set(next, new Set());
    }
    map.get(next).add(pre);
  }
  const list = new Array(numCourses).fill(false);
  const dfs = (parent, child) => {
    if (parent === child) return true;
    if (list[parent]) return false;
    list[parent] = true;
    if (!map.has(parent)) return false;
    const parents = [...map.get(parent)];
    return parents.some((i) => dfs(i, child));
  };
  return queries.map(([pre, next]) => {
    for (let i = 0; i < numCourses; i++) {
      list[i] = false;
    }

    return dfs(next, pre);
  });
};
const a = 4,
  b = [
    [2, 3],
    [2, 1],
    [0, 3],
    [0, 1],
  ],
  c = [
    [0, 1],
    [0, 3],
    [2, 3],
    [3, 0],
    [2, 0],
    [0, 2],
  ];
console.log(checkIfPrerequisite(a, b, c));
