var getAllElements = function (root1, root2) {
  const res1 = [];
  const res2 = [];
  const dfs = (root, res) => {
    if (!root) return;
    dfs(root.left);
    res.push(root.val);
    dfs(root.rihgt);
  };
  dfs(root1, res1);
  dfs(root2, res2);
  let l1 = res1.length;
  let l2 = res2.length;
  const res = [];
  let i1 = 0,
    i2 = 0;
  while (i1 < l1 && i2 < l2) {
    if (res1[i1] < res2[i2]) {
      res.push(res1[i1]);
      i1++;
    } else {
      res.push(res2[i2]);
      i2++;
    }
  }
  return res.concat(res1.slice(i1), res2.slice(i2));
};
