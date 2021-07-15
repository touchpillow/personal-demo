// var delNodes = function (root, to_delete) {
//   if (!root) return [];
//   const res = [];
//   const deep = (root, type = true) => {
//     if (!root) return null;
//     if (to_delete.includes(root.val)) {
//       deep(root.left, true);
//       deep(root.right, true);
//       return null;
//     } else {
//       if (type) {
//         res.push(root);
//       }
//       root.left = deep(root.left, false);
//       root.right = deep(root.right, false);
//     }
//     return root;
//   };
//   deep(root);
//   return res;
// };
var delNodes = function (root, to_delete, res = [], type = true) {
  if (!root) return res;
  if (to_delete.includes(root.val)) {
    delNodes(root.left, to_delete, res, true);
    delNodes(root.right, to_delete, res, true);
  } else {
    if (type) {
      res.push(root);
    }
    if (root.left && to_delete.includes(root.left.val)) {
      delNodes(root.left, to_delete, res, true);
      root.left = null;
    } else {
      delNodes(root.left, to_delete, res, false);
    }
    if (root.right && to_delete.includes(root.right.val)) {
      delNodes(root.right, to_delete, res, true);
      root.right = null;
    } else {
      delNodes(root.right, to_delete, res, false);
    }
  }
  return res;
};
