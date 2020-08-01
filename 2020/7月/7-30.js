// var diameterOfBinaryTree = function (root) {
//   if (!root) return 0;
//     return (
//       diameterOfBinaryTreeAA(root.left) + diameterOfBinaryTreeAA(root.right)
//     );
// };
// var diameterOfBinaryTreeAA = function (root) {
//   if (!root) return 0;
//   if (!root.left && !root.right) {
//     return 1;
//   } else if (!root.left) {
//     return diameterOfBinaryTreeAA(root.right) + 1;
//   } else if (!root.right) {
//     return diameterOfBinaryTreeAA(root.left) + 1;
//   } else {
//     return (
//       Math.max(
//         diameterOfBinaryTreeAA(root.left),
//         diameterOfBinaryTreeAA(root.right)
//       ) + 1
//     );
//   }
// };
// var checkRecord = function (s) {
//   const l = s.length;
//   let flag = false;
//   for (let i = 0; i < l; i++) {
//     if (s[i] === "A") {
//       if (flag) return false;
//       flag = true;
//     }
//     if (s[i] === "L" && s[i + 1] === "L") return false;
//   }
//   return true;
// };
var subsets = function (nums) {
  const l = nums.length;
  if (!l) return [];
  const res = [];
  for (let i = 1; i <= l; i++) {
    res.push(...subsetsAA(nums, i));
  }
  return res;
};
var subsetsAA = (nums, k) => {
  const l = nums;
  if (k <= 0) return [];
  if (l <= 0) return [];
  if (l < k) return [];
  if (l === k) {
    return nums.slice(0);
  }
  const copy = nums.slice(0);
  const item = copy.pop();
  const temp = subsetsAA(nums, k - 1);
  temp.forEach((i) => i.push(item));
  const temp2 = subsetsAA(copy, k);
  return temp.concat(temp, temp2);
};
