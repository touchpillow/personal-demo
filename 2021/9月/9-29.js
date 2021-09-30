/*
 * @Author: your name
 * @Date: 2021-09-29 12:57:28
 * @LastEditTime: 2021-09-29 14:26:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/personal-demo/2021/9月/9-29.js
 */
var isSubPath = function (head, root) {
  let str = "";
  while (head) {
    str += `${head.val}-`;
    head = head.next;
  }
  let res = false;
  const dfs = (root, pre) => {
    if (res) return;
    if (pre.includes(str)) {
      res = true;
    }
    if (!root) {
      return;
    }
    pre += `${root.val}-`;
    dfs(root.left, pre);
    dfs(root.right, pre);
  };
  return res;
};
// var isSubPath = function (head, root) {
//   let res = false;
//   const dfs = (node, next) => {
//     if (res) return;
//     if (!next) {
//       res = true;
//       return;
//     }
//     if (!node) return;
//     if (node.val === next.val) {
//       dfs(node.left, next.next);
//       dfs(node.right, next.next);
//     }
//     dfs(node.left, next);
//     dfs(node.right, next);
//   };
//   dfs(root, head);
//   return res;
// };
