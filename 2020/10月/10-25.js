// var canMeasureWater = function (x, y, z) {
//   const res = [x + y, x, y];
//   let d=Math.abs()
// };
// var destCity = function (paths) {
//   const map = new Map();
//   const set = new Set();
//   for (const [from, to] of paths) {
//     if (map.get(from)) {
//       map.get(from).push(to);
//     } else {
//       map.set(from, [to]);
//     }
//     set.add(to);
//   }
//   for (const key of set) {
//     if (!map.get(key)) return key;
//   }
// };
var buildArray = function (target, n) {
  const res = [];
  let index = 0;
  const l = target.length;
  for (let i = 1; i <= n && index < l; i++) {
    res.push("Push");
    if (target[index] !== i) {
      res.push("Pop");
    } else {
      index++;
    }
  }
  return res;
};
