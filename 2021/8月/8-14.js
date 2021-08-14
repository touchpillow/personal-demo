var reconstructMatrix = function (upper, lower, colsum) {
  const n = colsum.length;
  const res = new Array(2).fill("").map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    let cur = colsum[i];
    if (cur === 2) {
      upper--;
      lower--;
      res[0][i] = 1;
      res[1][i] = 1;
    } else if (cur === 1) {
      if (upper > lower) {
        upper--;
        res[0][i] = 1;
      } else {
        lower--;
        res[1][i] = 1;
      }
    }
  }
  if (upper || lower) return [];
  return res;
};
