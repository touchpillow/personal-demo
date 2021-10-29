var displayTable = function (orders) {
  const items = new Set();
  const map = new Map();
  for (const [a, num, v] of orders) {
    if (!map.has(num)) {
      map.set(num, new Map());
    }
    const curMap = map.get(num);
    curMap.set(v, (curMap.get(v) || 0) + 1);
    items.add(v);
  }
  const numsList = [...map.keys()].sort((a, b) => a - b);
  const caiList = [...items].sort();
  const res = [];
  res.push(["Table", ...caiList]);
  res.push(
    ...numsList.map((num) => {
      const curMap = map.get(num);
      return [num, ...caiList.map((cai) => curMap?.get(cai) ?? 0)];
    })
  );
  return res;
};
