var canConvertString = function (s, t, k) {
  const l = s.length;
  if (l * 25 <= k) return true;
  const list = new Array(26).fill(0);
  for (let i = 0; i < l; i++) {
    const dis = (t[i].charCodeAt() - s[i].charCodeAt() + 26) % 26;
    list[dis]++;
  }
  console.log(list);
  return (
    Math.max(
      ...list.map((item, index) => (index ? index + (item - 1) * 26 : 0))
    ) <= k
  );
};
const a = "aab",
  b = "bbb",
  c = 27;
console.log(canConvertString(a, b, c));
