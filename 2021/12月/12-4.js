var countPairs = function (root, distance) {
  let c = 0;
  const dfs = (root) => {
    if (!root) return new Map();
    const left = dfs(root.left);
    const right = dfs(root.right);
    if (!root.left && !root.right) {
      return new Map([[1, 1]]);
    }
    const cur = new Map();
    for (const l of left.keys()) {
      const v1 = left.get(l);
      for (const r of right.keys()) {
        const v2 = right.get(r);
        if (l + r <= distance) {
          c += v1 * v2;
        }
      }
    }
    for (const n of left.keys()) {
      cur.set(n + 1, (cur.get(n + 1) || 0) + left.get(n));
    }
    for (const n of right.keys()) {
      cur.set(n + 1, (cur.get(n + 1) || 0) + right.get(n));
    }
    return cur;
  };
  dfs(root);
  return c;
};
