var largestValsFromLabels = function (values, labels, num_wanted, use_limit) {
  const map = new Map();
  let sum = 0;
  const l = values.length;
  const list = values.map((item, i) => {
    return [values[i], labels[i]];
  });
  list.sort((a, b) => {
    return b[0] - a[0];
  });
  for (let i = 0; i < l; i++) {
    if (!num_wanted) break;
    const cur = list[i];
    if ((map.get(cur[1]) || 0) >= use_limit) continue;
    sum += cur[0];
    map.set(cur[1], (map.get(cur[1]) || 0) + 1);
    num_wanted--;
  }

  return sum;
};
const values = [9, 8, 8, 7, 6],
  labels = [0, 0, 0, 1, 1],
  num_wanted = 3,
  use_limit = 2;
console.log(largestValsFromLabels(values, labels, num_wanted, use_limit));
