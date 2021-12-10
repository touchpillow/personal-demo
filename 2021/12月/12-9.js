var maxNonOverlapping = function (nums, target) {
  const size = new Set([0]);
  let sum = 0;
  let c = 0;
  for (const n of nums) {
    sum += n;

    if (size.has(sum - target)) {
      c++;
      sum = 0;
      size.clear();
      size.add(0);
    } else {
      size.add(sum);
    }
  }
  return c;
};
console.log(maxNonOverlapping([-5, 5, -4, 5, 4], 5));
