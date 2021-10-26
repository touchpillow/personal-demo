var processQueries = function (queries, m) {
  const list = new Array(m).fill("").map((i, index) => index + 1);
  const l = queries.length;
  const res = new Array(l);
  for (let i = 0; i < l; i++) {
    const v = queries[i];
    res[i] = list.findIndex((i) => i === v);
    list.splice(res[i], 1);
    list.unshift(v);
  }
  return list;
};
