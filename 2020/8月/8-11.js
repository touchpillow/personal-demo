// var findErrorNums = function (nums) {
//   let a = 0;
//   const l = nums.length;
//   for(const n of nums){
//       if(nums[n-1]<0){
//           a=n
//       }else{
//           nums
//       }
//   }
//   console.log(nums);
//   for (let i = 0; i < l; i++) {
//     if (nums[i] > 0) {
//       return [a, i + 1];
//     }
//   }
// };
// var a = [1, 2, 2, 4];
// console.log(findErrorNums(a));
// var trimBST = function (root, L, R) {
//   if (!root) return root;
//   if (root.val < L) return trimBST(root.right, L, R);
//   if (root.val > R) return trimBST(root.left, L, R);
//   root.left = trimBST(root.left, L, R);
//   root.right = trimBST(root.right, L, R);
//   return root;
// };
// var findSecondMinimumValue = function (root) {
//   if (!root) return -1;
//   const search = (root, val) => {
//     if (!root) return;
//     if (root.val === val) {
//       if (!root.left) return;
//       const left = search(root.left, val);
//       const right = search(root.right, val);
//       if (!left || !right) {
//         return left || right;
//       } else {
//         return Math.min(left, right);
//       }
//     } else {
//       return root.val;
//     }
//   };
//   const left = search(root.left, root.val);
//   const right = search(root.right, root.val);
//   if (!left || !right) {
//     return left || right || -1;
//   } else {
//     return Math.min(left, right);
//   }
// };
var buildTree = function (preorder, inorder) {
  const l = preorder.length;
  if (!l) return null;
  const root = new TreeNode();
  let node = root;
  for (let i = 0; i < l; i++) {
    const index = inorder.findIndex((i) => i == preorder[i]);
    if (index < 0) break;
    if (index == 0) {
      node.left = null;
    } else {
    }
  }
  return root.left || root.right;
};
