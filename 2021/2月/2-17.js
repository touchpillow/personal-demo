// var distanceK = function (root, target, K) {
//   const dfs = (root, pre = []) => {
//     if (!root) return;
//     if (root.val === target.val) return pre.concat(target.val);
//     return (
//       dfs(root.left, pre.concat(root.val)) ||
//       dfs(root.right, pre.concat(root.val))
//     );
//   };
//   const url = dfs(root).reverse();
//   const map = new Map();
//   const l = url.length;
//   for (let i = 0; i < l; i++) {
//     map.set(url[i], i);
//   }
//   const dfs2 = (root, dis = 0) => {
//     if (!root) return;
//     const d = map.get(root.val) === undefined ? dis : map.get(root.val);
//     map.set(root.val, d);
//     dfs2(root.left, d + 1);
//     dfs2(root.right, d + 1);
//   };
//   dfs2(root);
//   const res = [];
//   for (const [v, d] of map.entries()) {
//     if (d === K) {
//       res.push(v);
//     }
//   }
//   return res;
// };
var subtreeWithAllDeepest = function (root) {
  const map = new Map();
  const dfs = (root) => {
    if (!root) return 0;
    const left = dfs(root.left, deep + 1);
    const right = dfs(root.right, deep + 1);
    const deep = Math.max(left, right) + 1;
    map.set(root.val, deep);
    return deep;
  };
  dfs(root);
  const dfs2 = (root) => {
    const left = root.left ? map.get(root.left.val) : 0;
    const right = root.right ? map.get(root.right.val) : 0;
    if (left === right) return root;
    return left > right ? dfs2(root.left) : dfs2(root.right);
  };
  return dfs2(root);
};
