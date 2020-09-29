// var hIndex = function (citations) {
//   const l = citations.length;
//   if (!l) return 0;
//   citations.sort((a, b) => b - a);
//   for (let i = 0; i < l; i++) {
//     if (i + 1 > citations[i]) return i;
//   }
//   return l;
// };
// const a = [3, 0, 6, 1, 5];
// console.log(hIndex(a));
// var relativeSortArray = function (arr1, arr2) {
//   return arr1.sort((a, b) => {
//     const i1 = arr2.findIndex((i) => i == a);
//     const i2 = arr2.findIndex((i) => i == b);
//     if (i1 < 0 && i2 < 0) {
//       return a - b;
//     } else if (i1 >= 0 && i2 >= 0) {
//       return i1 - i2;
//     } else {
//       return i2 - i1;
//     }
//   });
// };
var numEquivDominoPairs = function (dominoes) {
  const map = new Map();
  for (const [a, b] of dominoes) {
    if (map.get(`${a}-${b}`)) {
      map.set(`${a}-${b}`, map.get(`${a}-${b}`) + 1);
    } else if (map.get(`${b}-${a}`)) {
      map.set(`${b}-${a}`, map.get(`${b}-${a}`) + 1);
    } else {
      map.set(`${a}-${b}`, 1);
    }
  }
  let count = 0;
  for (const n of map.keys()) {
    count += (map.get(n) * (map.get(n) - 1)) / 2;
  }
  return count;
};
