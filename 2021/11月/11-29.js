var minDifference = function (nums) {
  nums.sort((a, b) => a - b);
  const l = nums.length;
  if (l <= 4) return 0;
  let min = 0;
  let cur = 0;
  for (let i = 0; i <= 3; i++) {
    let c = 0;
    for (let j = 0; j < i; j++) {
      c += nums[j + 1] - nums[j];
    }
    for (let j = 0; j < 3 - i; j++) {
      c += nums[l - 1 - j] - nums[l - 1 - j - 1];
    }
    if (c > min) {
      cur = i;
      min = c;
    }
  }

  return nums[l - 1 - 3 + cur] - nums[cur];
};
console.log(minDifference([1, 5, 0, 10, 14]));
