var countRangeSum = function (nums, lower, upper) {
  let n = 0;
  let sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum = 0;
    for (var j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= lower && dp <= upper) n++;
    }
  }

  return n;
};
