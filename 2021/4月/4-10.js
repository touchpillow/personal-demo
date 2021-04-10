var getPermutation = function (n, k) {
  const options = [];
  let unit = 1;
  for (let i = 1; i <= n; i++) {
    options.push(i);
    unit *= i;
  }
  unit /= n;
  let res = "";
  while (res.length < n) {
    const index = Math.ceil(k / unit) - 1;
    res += options.splice(index, 1)[0];
    k -= index * unit;
    unit /= n - res.length;
  }
  return res;
};
console.log(getPermutation(3, 1));
