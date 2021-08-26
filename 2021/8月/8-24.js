var isPossibleDivide = function (nums, k) {
  let min = Infinity;
  const map = new Map();
  for (const n of nums) {
    min = Math.min(min, n);
    map.set(n, (map.get(n) || 0) + 1);
  }
  while (true) {
    if (!map.size) return true;
    let c = min;
    while (!map.has(c)) {
      c++;
    }
    min = c;
    for (let i = 0; i < k; i++) {
      if (!map.has(c)) return false;
      map.set(c, map.get(c) - 1);
      if (!map.get(c)) {
        map.delete(c);
      }
      c++;
    }
  }
};
