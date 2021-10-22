var canConstruct = function (s, k) {
  const l = s.length;
  const map = new Map();
  for (const n of s) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  if (k > l) return false;
  if (k >= map.size) return true;
  const counts = [...map.values()];
  const c1 = counts.filter((i) => i % 2); //奇数
  const c2 = counts.filter((i) => !(i % 2)); //偶数
  console.log(map, c1, c2);
  if (k < c1) return false;
  return true;
};
console.log(canConstruct("leetcode", 3));
