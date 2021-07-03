var sufficientSubset = function (root, limit) {
  const getSum = (root, sum = 0) => {
    if (!root) return;
    root.sum = sum + root.val;
    getSum(root.left, sum + root.val);
    getSum(root.right, sum + root.val);
  };
  getSum(root);

  const dfs = (root) => {
    if (!root) return [null, -Infinity];
    if (!root.left && !root.right) {
      if (root.sum < limit) return [null, root.val];
      return [root, root.val];
    }
    const [l, leftV] = dfs(root.left);
    const [r, rightV] = dfs(root.right);
    const max = Math.max(leftV, rightV);
    root.left = l;
    root.right = r;
    if (root.sum + max < limit) {
      return [null, max + root.val];
    }
    return [root, max + root.val];
  };
  return dfs(root)[0];
};
// [1, 2, -3, -5, null, 4, null]
// -1
//      1
//   2      -3
// -5 null  4 null
