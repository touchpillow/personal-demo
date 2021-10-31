var minNumberOfFrogs = function (croakOfFrogs) {
  const indexMap = {
    c: 0,
    r: 1,
    o: 2,
    a: 3,
    k: 4,
  };
  const map = new Map([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);
  let max = 0;
  for (const n of croakOfFrogs) {
    const v = indexMap[n];
    map.set(v, (map.get(v) || 0) + 1);
    if (v !== 0) {
      map.set(v - 1, (map.get(v - 1) || 0) - 1);
    }
    if (v === 4) {
      map.set(v, (map.get(v) || 0) - 1);
    }
    let sum = 0;
    for (const a of map.values()) {
      if (a < 0) return -1;
      sum += a;
    }
    max = Math.max(sum, max);
  }
  if ([...map.values()].some((i) => i !== 0)) return -1;
  return max;
};
console.log(minNumberOfFrogs("aoocrrackk"));
