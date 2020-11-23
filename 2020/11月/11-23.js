var canPermutePalindrome = function (s) {
  const map = new Map();
  for (const n of s) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  let c = 0;
  for (const n of map.values()) {
    if (n % 2) c++;
  }
  return n <= 1;
};
