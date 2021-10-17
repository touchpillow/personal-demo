var minPatches = function (nums, n) {
  const l = nums.length;
  let index = 0;
  let pre = 0;
  let res = 0;
  for (let i = 1; i <= n; ) {
    while (index < l && nums[index] <= pre) {
      pre += nums[index];
      index++;
    }
    i = pre + 1;
    // console.log(res, i);
    if (i > n) break;
    if (index === l) {
      res++;
      pre += i;

      continue;
    }
    // console.log(res, i);
    if (i < nums[index]) {
      res++;
      pre += i;
    } else {
      pre += nums[index];
      index++;
    }
    console.log(res, i);
  }
  return res;
};
const nums = [
  1, 2, 16, 19, 31, 35, 36, 64, 64, 67, 69, 71, 73, 74, 76, 79, 80, 91, 95, 96,
  97,
];
n = 8;
console.log(minPatches(nums, n));
