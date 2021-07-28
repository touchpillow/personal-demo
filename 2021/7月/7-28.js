var smallestStringWithSwaps = function (s, pairs) {
  const l = s.length;
  const list = new Array(l).fill("").map((i, index) => index);
  const find = (v) => {
    while (list[v] !== v) {
      v = list[v];
    }
    return v;
  };
  for (const [a, b] of pairs) {
    const targetA = find(a);
    const targetB = find(b);
    if (b !== targetB) {
      list[targetA] = targetB;
    } else {
      list[targetB] = targetA;
    }
  }
  const map = new Map();
  const indexMap = new Map();
  for (let i = 0; i < l; i++) {
    const target = find(i);
    indexMap.set(i, target);
    if (!map.has(target)) {
      map.set(target, {
        data: [],
        index: 0,
      });
    }
    map.get(target).data.push(s[i]);
  }
  for (const key of map.keys()) {
    map.get(key).data.sort();
  }
  let res = "";
  for (let i = 0; i < l; i++) {
    const target = indexMap.get(i);
    res += map.get(target).data[map.get(target).index++];
  }
  return res;
};
