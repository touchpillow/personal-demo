// var minCount = function (coins) {
//   return coins.reduce((res, item) => res + Math.ceil(item / 2), 0);
// };
// var numWays = function (n, relation, k) {
//   const map = new Map();
//   for (const [from, to] of relation) {
//     if (map.get(from)) {
//       map.get(from).add(to);
//     } else {
//       const set = new Set([to]);
//       map.set(from, set);
//     }
//   }
//   let count = 0;
//   const search = (to, c) => {
//     if (!c) {
//       if (to == n - 1) count++;
//       return;
//     }
//     for (const n of map.get(to) || []) {
//       search(n, c - 1);
//     }
//   };
//   search(0, k);
//   return count;
// };
// var lexicalOrder = function (n) {
//   const res = new Array(n);
//   const stack = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   let c = 0;
//   while (c < n) {
//     const item = stack.shift();
//     if (+item > n) continue;
//     res[c++] = item;
//     const list = new Array(10);
//     for (let i = 0; i < 10; i++) {
//       list[i] = `${item}${i}`;
//     }
//     stack.unshift(...list);
//   }
//   return res;
// };
// console.log(lexicalOrder(13));
var lexicalOrder = function (n) {
  const res = new Array(n);
  for (let i = 1; i <= n; i++) {
    res[i - 1] = `${i}`;
  }
  res.sort();
  return res;
};
