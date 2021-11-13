var hasAllCodes = function (s, k) {
  const set = new Set();
  const l = s.length;
  for (let i = 0; i < l - k; i++) {
    set.add(s.slice(i, i + k));
  }
  console.log(set);
  return set.size >= Math.pow(2, k);
};
console.log(hasAllCodes("00110", 2));
