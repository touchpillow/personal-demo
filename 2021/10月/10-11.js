/*
 * @Author: your name
 * @Date: 2021-10-12 12:54:57
 * @LastEditTime: 2021-10-12 13:02:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/personal-demo/2021/10月/10-11.js
 */
var getTargetCopy = function (original, cloned, target) {
  let c = 0;
  let v = 0;
  let res = null;
  const dfs = (root, handler) => {
    if (!root) return;
    dfs(root.left, handler);
    handler(root);
    c++;
    dfs(root.right, handler);
  };
  c = 0;
  dfs(original, (root) => {
    if (root === target) {
      v = c;
    }
  });
  dfs(cloned, (root) => {
    if (c === v) {
      res = root;
    }
  });
  return res;
};
