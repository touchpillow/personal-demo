// var loudAndRich = function (richer, quiet) {
//   const l = quiet.length;
//   const res = quiet.slice(0);
//   const qMap = quiet.reduce((map, item, index) => {
//     map[item] = index;
//     return map;
//   }, {});
//   const map = new Map();
//   for (const [v1, v2] of richer) {
//     if (!map.get(v2)) {
//       map.set(v2, []);
//     }
//     map.get(v2).push(v1);
//   }
//   const set = new Set();
//   const dfs = (i) => {
//     set.add(i);
//     const v = res[i];
//     const next = map.get(i) || [];
//     let nextV;
//     if (!next.length) {
//       nextV = Infinity;
//     } else {
//       nextV = Math.min(...next.map((v) => dfs(v)));
//     }
//     res[i] = Math.min(v, nextV);
//     return res[i];
//   };
//   for (let i = 0; i < l; i++) {
//     if (set.has(i)) continue;
//     dfs(i);
//   }
//   return res.map((item) => qMap[item]);
// };
// const richer = [
//     [1, 0],
//     [2, 1],
//     [3, 1],
//     [3, 7],
//     [4, 3],
//     [5, 3],
//     [6, 3],
//   ],
//   quiet = [3, 2, 5, 4, 6, 1, 7, 0];
// console.log(loudAndRich(richer, quiet));
var carFleet = function (target, position, speed) {
  if (!position.length) return 0;
  position = position.map((item, index) => [item, speed[index]]);
  position.sort((a, b) => b[0] - a[0]);
  let c = 0;
  let cur = position.shift();
  let t = (target - cur[0]) / cur[1];
  while (position.length) {
    const v = position.shift();
    const t2 = (target - v[0]) / v[1];
    if (t >= t2) {
      continue;
    } else {
      c++;
      cur = v;
      t = t2;
    }
  }
  return c + 1;
};
const target = 10,
  position = [0, 4, 2],
  speed = [2, 1, 3];
console.log(carFleet(target, position, speed));
