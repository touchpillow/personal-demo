const insert = (n, list) => {
  const l = list.length;
  if (!l) {
    return 0;
  }
  let left = 0,
    right = l - 1;
  if (list[left] >= n) {
    return 0;
  }
  if (list[right] < n) {
    return l;
  }
  while (left < right) {
    const mid = ~~((left + right) / 2);
    if (mid === left) break;
    if (list[mid] >= n) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
};
var countSmaller = function (nums) {
  const l = nums.length;
  const stack = [];
  const res = new Array(l);
  for (let i = l - 1; i >= 0; i--) {
    const n = nums[i];

    const index = insert(n, stack);
    res[i] = index;
    stack.splice(index, 0, n);
  }
  return res;
};
const a = [5, 2, 6, 1];

console.log(countSmaller(a));
