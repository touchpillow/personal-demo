var pseudoPalindromicPaths = function (root) {
  const num = new Array(10).fill(0);
  let c = 0;
  const dfs = (root) => {
    if (!root) return;
    num[root.val]++;
    if (!root.left && !root.right) {
      const l = num.filter((i) => i).length;

      if (l < 2) c++;
    }
    dfs(root.left);
    num[root.val]--;
    dfs(root.right);
  };
  return c;
};
[2, 1, 1, 1, 3, null, null, null, null, null, 1];
