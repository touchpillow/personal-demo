// var bstToGst = function (root) {
//   let v = 0;
//   const dfs = (root) => {
//     if (!root) return;
//     dfs(root.right);
//     const val = root.val;
//     root.val += v;
//     v += val;
//     dfs(root.left);
//   };
//   dfs(root);
//   return root;
// };
var maxLevelSum = function (root) {
  const res = [-Infinity];
  const dfs = (root, level = 1) => {
    if (!root) return;
    res[level] = (res[level] || 0) + root.val;
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  };
  dfs(root);
  let max = res[0];
  let index = 0;
  for (let i = 1; i < res.length; i++) {
    if (res[i] > max) {
      max = res[i];
      index = i;
    }
  }
  return index;
};
