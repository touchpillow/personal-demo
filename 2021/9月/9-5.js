// const a = 1;
// const b = "function aa(){console.log(a)}";

// const c = eval(b);
// console.log(c);
// var removeLeafNodes = function (root, target) {
//   if (!root) return null;
//   const dfs = (root) => {
//     if (!root) return false;
//     const left = dfs(root.left, target);
//     const right = dfs(root.right, target);
//     if (!left) {
//       root.left = null;
//     }
//     if (!right) {
//       root.right = null;
//     }
//     return root.val !== target || left || right;
//   };
//   const v = dfs(root);
//   return v ? root : null;
// };
var removeLeafNodes = function (root, target) {
  if (!root) return null;
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);
  if (!root.left && !root.right && root.val === target) return null;
  return root;
};
