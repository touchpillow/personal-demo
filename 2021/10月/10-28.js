var getHappyString = function (n, k) {
  if (k > 3 * Math.pow(2, n - 1)) {
    return "";
  }
  let mod = Math.pow(2, n - 1);
  const s = ["a", "b", "c"];
  let res = "";
  k--;
  while (res.length < n) {
    const pre = res[res.length - 1];
    const cur = s.filter((i) => i !== pre);
    const index = ~~(k / mod);

    k = k % mod;

    mod /= 2;

    res += cur[index];
  }
  return res;
};
console.log(getHappyString(10, 100));
