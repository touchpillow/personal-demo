var longestSubarray = function (nums) {
  const list = [];
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    if (!nums[i]) {
      list.push(i);
    }
  }
  if (list.length < 2) return l - 1;
  list.unshift(-1);
  list.push(l);
  const l1 = list.length;
  let max = 0;
  console.log(list);
  for (let i = 0; i < l1 - 2; i++) {
    max = Math.max(max, list[i + 2] - list[i] - 2);
  }
  return max;
};
console.log(longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1]));
