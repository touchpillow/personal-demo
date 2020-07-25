var removeDuplicates = function (nums) {
  var l = nums.length;
  if (l < 2) return l;
  var res = 1;
  for (var i = 1; i < l; i++) {
    console.log(res, i, nums);
    if (nums[i] !== nums[res - 1]) {
      nums[res] = nums[i];
      res++;
    }
  }
  console.log(nums);
  return res;
};
console.log(removeDuplicates([1, 1, 2, 3]));
