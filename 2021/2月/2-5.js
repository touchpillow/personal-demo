// var pruneTree = function (root) {
//   const dfs = (root) => {
//     if (!root) return 0;
//     const left = dfs(root.left);
//     const right = dfs(root.left);
//     if (!left) {
//       root.left = null;
//     }
//     if (!right) {
//       root.right = null;
//     }
//     return left + right + (root.val === 0 ? 0 : 1);
//   };
//   dfs(root);
//   if (!root.val && !root.left && !root.right) return null;
//   return root;
// };
// var pruneTree = function (root) {
//   const dfs = (root) => {
//     if (!root) return null;
//     root.left = dfs(root.left);
//     root.right = dfs(root.right);
//     if (!root.val && !root.left && !root.right) return null;
//     return root;
//   };
//   return dfs(root);
// };
var ambiguousCoordinates = function (S) {};
