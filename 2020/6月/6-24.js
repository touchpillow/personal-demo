var aa = (n) => {
  if (n < 5) return 0;
  let a = n;
  let v = 0;
  while (!((a / 5) % 1)) {
    v++;
    a = a / 5;
  }
  return v;
};
const aaa = (n, res) => {
  const count = Math.floor(n / 5);
  return aaa(count, res + count);
};
const trailingZeroes = function (n) {
  let res = arguments[1] ? arguments[1] : 0;
  if (n < 5) {
    return res;
  }
  v = (n / 5) | 0;
  return aaa(v, res + v);
};

console.log(trailingZeroes(6));
