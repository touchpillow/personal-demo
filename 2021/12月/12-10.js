var getMaxLen = function (nums) {
  let pre = -1;
  let index = [];
  const l = nums.length;
  let max = 0;
  for (let i = 0; i < l; i++) {
    if (!nums[i]) {
      pre = i;
      index = [];
    } else if (nums[i] > 0) {
      if (index.length % 2) {
        max = Math.max(max, i - index[0]);
      } else {
        max = Math.max(max, i - pre);
      }
      console.log(nums[i], max, index);
    } else {
      if (index.length % 2) {
        max = Math.max(max, i - pre);
      } else {
        max = Math.max(max, i - 1 - pre);
      }
      index.push(i);
    }
  }
  return max;
};
console.log(getMaxLen([-1, 2]));
