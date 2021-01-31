// var countBalls = function (lowLimit, highLimit) {
//   const dp = new Array(100000 + 1).fill(0);
//   for (let i = lowLimit; i <= highLimit; i++) {
//     const n = `${i}`;
//     let s = 0;
//     for (const v of n) {
//       s += Number(v);
//     }
//     dp[s]++;
//   }
//   return Math.max(...dp);
// };
// var restoreArray = function (adjacentPairs) {
//   const map = new Map();
//   for (const [a, b] of adjacentPairs) {
//     if (!map.has(a)) {
//       map.set(a, new Set());
//     }
//     if (!map.has(b)) {
//       map.set(b, new Set());
//     }
//     map.get(a).add(b);
//     map.get(b).add(a);
//   }
//   const keys = [...map.keys()];
//   let cur = keys.find((item) => map.get(item).size === 1);
//   const res = [];
//   while (map.has(cur) && map.get(cur).size) {
//     res.push(cur);
//     const set = map.get(cur);
//     set.delete(res[res.length - 2]);
//     if (!set.size) break;
//     const next = [...set];
//     cur = next[0];
//   }
//   return res;
// };
// const adjacentPairs = [[100000, -100000]];
// console.log(restoreArray(adjacentPairs));
// var canEat = function (candiesCount, queries) {
//   const l = queries.length;
//   const res = new Array(l);
//   const l2 = candiesCount.length;
//   const left = new Array(l2);
//   left[0] = 0;
//   for (let i = 1; i < l2; i++) {
//     left[i] = left[i - 1] + candiesCount[i - 1];
//   }
//   for (let i = 0; i < l; i++) {
//     const [type, day, limit] = queries[i];
//     res[i] =
//       (day + 1) * limit > left[type] && left[type] + candiesCount[type] > day;
//   }
//   return res;
// };
// const candiesCount = [5, 2, 6, 4, 1],
//   queries = [
//     [3, 1, 2],
//     [4, 10, 3],
//     [3, 10, 100],
//     [4, 100, 30],
//     [1, 3, 1],
//   ];
// console.log(canEat(candiesCount, queries));
// var checkPartitioning = function (s) {
//   const l = s.length;
//   if (l === 3) return true;
//   const res = new Array(l).fill("").map(() => new Array(l).fill(false));
//   for (let i = l - 1; i >= 0; i--) {
//     for (let j = i; j < l; j++) {
//       if (j == i) {
//         res[i][j] = true;
//       } else if (j - 1 == i && s[i] == s[j]) {
//         res[i][j] = true;
//       } else if (s[i] == s[j] && res[i + 1][j - 1]) {
//         res[i][j] = true;
//       }
//     }
//   }
//   const keys = [];
//   for (let i = 0; i < l - 2; i++) {
//     if (res[0][i]) {
//       keys.push(i + 1);
//     }
//   }
//   let flag = false;
//   keys.forEach((item) => {
//     if (flag) return;
//     for (let i = item; i < l; i++) {
//       if (res[item][i] && res[i + 1][l - 1]) {
//         flag = true;
//         break;
//       }
//     }
//   });
//   return flag;
// };
// const s = "abcbdd";
// console.log(checkPartitioning(s));
var canEat = function (candiesCount, queries) {
  const l2 = candiesCount.length;
  const left = new Array(l2);
  left[0] = 0;
  for (let i = 1; i < l2; i++) {
    left[i] = left[i - 1] + candiesCount[i - 1];
  }
  return queries.map((item) => {
    const [type, day, limit] = item;
    return (
      (day + 1) * limit > left[type] && left[type] + candiesCount[type] > day
    );
  });
};
