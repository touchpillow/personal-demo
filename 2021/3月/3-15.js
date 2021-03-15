// var flipMatchVoyage = function (root, voyage) {
//   const res = [];
//   let flag = true;
//   if (!root) return voyage.length ? [-1] : [];
//   if (root.val !== voyage[0]) return -1;
//   let i = 1;
//   const dfs = (root) => {
//     if (!root) return;

//     if (!root.left && !root.right) return;

//     if (!root.left) {
//       if (root.right.val === voyage[i]) {
//         i++;
//         dfs(root.right);
//       } else {
//         flag = false;
//       }
//     } else {
//       if (root.left.val === voyage[i]) {
//         i++;
//         dfs(root.left);
//         if (!root.right) return;
//         if (root.right.val !== voyage[i]) {
//           flag = false;
//         } else {
//           i++;
//           dfs(root.right);
//         }
//       } else {
//         if (!root.right) {
//           flag = false;
//         } else if (root.right.val !== voyage[i]) {
//           flag = false;
//         } else {
//           [root.left, root.right] = [root.right, root.left];
//           res.push(root.val);
//           i++;
//           dfs(root.left);
//           if (root.right.val !== voyage[i]) {
//             flag = false;
//           } else {
//             i++;
//             dfs(root.right);
//           }
//         }
//       }
//     }
//   };
//   dfs(root);
//   return flag ? res : -1;
// };
// var kClosest = function (points, k) {
//   const dis = points.map((item, index) => {
//     return [Math.pow(item[0], 2) + Math.pow(item[1], 2), index];
//   });
//   dis.sort((a, b) => a[0] - b[0]);
//   return dis.slice(0, k).map((item) => points[item[1]]);
// };
var hasPathSum = function (root, sum) {
  const stack = [
    {
      node: root,
      sum: 0,
    },
  ];
  while (stack.length) {
    const cur = stack.shift();
    const node = cur.node;
    if (!node) continue;
    if (!node.left && !node.right) {
      if (node.val + cur.sum === sum) return true;
    } else {
      stack.push({
        node: node.left,
        sum: cur.sum + node.val,
      });
      stack.push({
        node: node.right,
        sum: cur.sum + node.val,
      });
    }
  }
  return false;
};
// var hasPathSum = function (root, targetSum) {
//   let stack = [root.val]
//   const dfs = (root) => {
//     if (!root) return false
//     stack.push(root.val)
//     console.log(root, stack)
//     if (root.left === null && root.right === null) {
//       let pathSum = stack.reduce((pre, item) => pre + item, 0)
//       stack.pop()
//       if (pathSum === targetSum) {
//         return true
//       } else {
//         return false
//       }
//     }
//     let leftRes = dfs(root.left)
//     let rightRes = dfs(root.right)

//     return leftRes || rightRes
//   }
