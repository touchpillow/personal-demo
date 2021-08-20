var smallestDivisor = function (nums, threshold) {
  let left = 1,
    right = Math.max(...nums);
  const l = nums.length;
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum <= threshold) return 1;
  while (true) {
    const mid = ~~((left + right) / 2);
    if (mid === left) return right;
    const sum = nums.reduce((a, b) => a + Math.ceil(b / mid), 0);

    if (sum > threshold) {
      left = mid;
    } else {
      right = mid;
    }
  }
};
const a = [1, 2, 5, 9];
const b = 6;
console.log(smallestDivisor(a, b));
