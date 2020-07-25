var sortedArrayToBST = function (nums) {
  let l = nums.length;
  if (!l) return null;
  if (l === 1) return new TreeNode(nums[0]);

  const middle = Math.floor(l / 2);
  const mn = new TreeNode(nums[middle]);
  mn.left = sortedArrayToBST(nums.slice(0, middle));
  mn.right = sortedArrayToBST(nums.slice(middle + 1));
  return mn;
};
