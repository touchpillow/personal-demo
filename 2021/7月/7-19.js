var movesToMakeZigzag = function (nums) {
  let c1 = 0;
  let c2 = 0;
  const l = nums.length;
  for (let i = 1; i < l; i += 2) {
    c1 += Math.max(
      0,
      nums[i] - Math.min(nums[i - 1], nums[i + 1] ?? Infinity) + 1
    );
  }
  for (let i = 0; i < l; i += 2) {
    c2 += Math.max(
      0,
      nums[i] - Math.min(nums[i - 1] ?? Infinity, nums[i + 1] ?? Infinity) + 1
    );
  }
  return Math.min(c1, c2);
};
