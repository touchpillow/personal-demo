// var bstFromPreorder = function (preorder) {
//   const l = preorder.length;
//   const root = new TreeNode(preorder[0]);
//   const insertNode = (root, v) => {
//     if (!root) return new TreeNode(v);
//     if (root.val > v) {
//       root.left = insertNode(root.left, v);
//     } else {
//       root.right = insertNode(root.right, v);
//     }
//     return root;
//   };
//   for (let i = 1; i < l; i++) {
//     insertNode(root, preorder[i]);
//   }
//   return root;
// };
var shipWithinDays = function (weights, D) {
  let right = 0;
  let left = 0;
  for (const w of weights) {
    right += w;
    left = Math.max(left, w);
  }
  if (D === 1) return right;
  const juadge = (v) => {
    let count = 1;
    let cur = 0;
    for (const w of weights) {
      if (cur + w > v) {
        count++;
        cur = w;
      } else {
        cur += w;
      }
    }
    return count <= D;
  };
  if (juadge(left)) return left;
  while (right > left) {
    const mid = ~~((left + right) / 2);
    if (left === mid) return right;
    if (juadge(mid)) {
      right = mid;
    } else {
      left = mid;
    }
  }
};
