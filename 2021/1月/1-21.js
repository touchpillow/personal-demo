// var deleteAndEarn = function (nums) {
//   let max = 0;
//   let min = 10000;
//   const map = new Map();
//   for (const n of nums) {
//     max = Math.max(max, n);
//     min = Math.min(min, n);
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   const l1 = new Array(max + 1).fill(0);
//   const l2 = new Array(max + 1).fill(0);
//   for (let i = min; i <= max; i++) {
//     l1[i] = l2[i - 1] + i * (map.get(i) || 0);
//     l2[i] = Math.max(l1[i - 1], l2[i - 1]);
//   }

//   return Math.max(l1[max], l2[max]);
// };
// const a = [2, 2, 3, 3, 3, 4];

// console.log(deleteAndEarn(a));
var networkDelayTime = function (times, n, k) {
  const res = new Map();
  const map = {};
  for (const [start, end, t] of times) {
    if (!map[start]) {
      map[start] = {};
    }
    map[start][end] = t;
  }
  const flag = new Set();
  for (let i = 1; i <= n; i++) {
    flag.add(i);
  }
  const dfs = (k, v) => {
    flag.delete(k);
    if (!res.has(k)) {
      res.set(k, v);
    } else if (res.get(k) <= v) {
      return;
    } else {
      res.set(k, v);
    }
    if (!map[k]) return;
    const keys = Object.keys(map[k]);
    keys.forEach((item) => {
      dfs(Number(item), v + map[k][item]);
    });
  };
  dfs(k, 0);
  if (flag.size) return -1;
  return Math.max(...res.values());
};
const times = [
    [1, 2, 1],
    [2, 1, 3],
  ],
  n = 2,
  k = 2;
console.log(networkDelayTime(times, n, k));
