/*
 * @Author: your name
 * @Date: 2021-10-08 14:13:18
 * @LastEditTime: 2021-10-08 14:19:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/personal-demo/2021/10月/10-8.js
 */
var longestZigZag = function (root) {
  let max = 0;
  const dfs = (root) => {
    if (!root) return [0, 0];
    const left = dfs(root.left);
    const right = dfs(root.right);
    max = Math.max(left[1] + 1, right[0] + 1, max);
    return [left[1] + 1, right[0] + 1];
  };
  dfs(root);
  return Math.max(max - 1, 0);
};
