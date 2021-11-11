var maxVowels = function (s, k) {
  const l = s.length;
  const map = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };
  let c = 0,
    max = 0;
  for (let i = 0; i < k; i++) {
    if (map[s[i]]) {
      c++;
    }
  }
  max = c;
  for (let i = k; i < l; i++) {
    if (map[s[i]]) {
      c++;
    }
    if (map[s[i - k]]) {
      c--;
    }
    max = Math.max(max, c);
  }
  return max;
};
