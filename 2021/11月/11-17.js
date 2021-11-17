var getStrongest = function (arr, k) {
  const list = arr.slice().sort((a, b) => a - b);
  const l = list.length;
  const m = list[~~((l - 1) / 2)];
  return list
    .sort((a, b) => {
      if (Math.abs(a - m) !== Math.abs(b - m)) {
        return Math.abs(b - m) - Math.abs(a - m);
      }
      return b - a;
    })
    .slice(0, k);
};
