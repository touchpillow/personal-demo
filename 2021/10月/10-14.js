/*
 * @Author: your name
 * @Date: 2021-10-14 13:00:15
 * @LastEditTime: 2021-10-14 14:04:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/personal-demo/2021/10月/10-14.js
 */
var balanceBST = function (root) {
  const node = [];
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    node.push(root.val);
    dfs(root.right);
  };
  dfs(root);
  const l = node.length;
  const getTree = (left, right) => {
    if (left > right) return null;
    if (left === right) {
      return new TreeNode(node[left]);
    } else {
      const mid = ~~((left + right) / 2);
      const root = new TreeNode(node[mid]);
      root.left = getTree(left, mid - 1);
      root.right = getTree(mid + 1, right);
      return root;
    }
  };
  return getTree(0, l - 1);
};
