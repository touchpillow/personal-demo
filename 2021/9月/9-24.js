var numberOfSubstrings = function (s) {
  const l = s.length;
  const map = [0, 0, 0];
  let left = 0;
  let right = 0;
  let c = 0;
  while (left < l - 2) {
    while (map.some((item) => !item) && right < l) {
      const code = s[right].charCodeAt() - 97;
      map[code]++;
      right++;
    }
    if (map.some((item) => !item)) break;
    c += l - right + 1;

    const leftCode = s[left].charCodeAt() - 97;
    map[leftCode]--;
    left++;
  }
  return c;
};
const a = "ababbbc";
console.log(numberOfSubstrings(a));
