var rangeSum = function (nums, n, left, right) {
  const sum = new Array((n * (n + 1)) / 2);
  const leftSum = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    leftSum[i] = leftSum[i - 1] + nums[i - 1];
  }
  let c = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      sum[c] = leftSum[j + 1] - leftSum[i];
      c++;
    }
  }
  sum.sort((a, b) => a - b);

  let res = 0;
  const mod = Math.pow(10, 9) + 7;
  for (let i = left - 1; i < right; i++) {
    res = (res + sum[i]) % mod;
  }
  return res;
};
console.log(rangeSum([1, 2, 3, 4], 4, 1, 5));
