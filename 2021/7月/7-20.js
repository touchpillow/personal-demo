var btreeGameWinningMove = function (root, n, x) {
  const dfs = (root, type = false) => {
    if (!root && !type) return 0;
    if (!root) return 0;
    if (root.val === x) {
      return [dfs(root.left, true), dfs(root.right, true)];
    }
    if (!type) {
      return dfs(root.left) || dfs(root.right);
    }
    return 1 + dfs(root.left, true) + dfs(root.right, true);
  };
  const [left, right] = dfs(root);
  console.log(left, right);
  return left > n / 2 || left > n / 2 || left + right + 1 < n / 2;
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const v5 = new TreeNode(5);
const v4 = new TreeNode(4);
const v3 = new TreeNode(3);
const v2 = new TreeNode(2, v4, v5);
const v1 = new TreeNode(1, v2, v3);
console.log(btreeGameWinningMove(v1, 5, 2));
      6
    3    
   7  4
        2
       1
     5