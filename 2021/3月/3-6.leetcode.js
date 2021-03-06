// var nearestValidPoint = function (x, y, points) {
//   points.forEach((item, index) => {
//     item.push(index);
//   });
//   const a = points.filter((item) => item[0] === x || item[1] === y);
//   if (!a.length) return -1;

//   a.sort((a, b) => {
//     if (
//       Math.abs(a[0] - x) + Math.abs(a[1] - y) !==
//       Math.abs(b[0] - x) + Math.abs(b[1] - y)
//     ) {
//       return (
//         Math.abs(a[0] - x) +
//         Math.abs(a[1] - y) -
//         Math.abs(b[0] - x) -
//         Math.abs(b[1] - y)
//       );
//     }
//     return a[2] - b[2];
//   });
//   return a[0][2];
// };
// const x = 3,
//   y = 4,
//   points = [[2, 3]];
// console.log(nearestValidPoint(x, y, points));
// var checkPowersOfThree = function (n) {
//   const stack = [];
//   let c = 0;
//   while (Math.pow(3, c) <= n) {
//     stack.unshift(Math.pow(3, c));
//     c++;
//   }
//   if (stack.includes(n)) return true;
//   let index = 0;
//   while (n) {
//     if (index >= stack.length) break;
//     if (n < stack[index]) {
//       index++;
//     } else {
//       n -= stack[index];
//       index++;
//     }
//   }
//   return !n;
// };
// console.log(checkPowersOfThree(21));
// var beautySum = function (s) {
//   const l = s.length;
//   let sum = 0;
//   for (let i = 0; i < l; i++) {
//     const map = new Map();
//     for (let j = i; j < l; j++) {
//       map.set(s[j], (map.get(s[j]) || 0) + 1);
//       const list = [...map.values()].sort((a, b) => a - b);
//       sum += list[list.length - 1] - list[0];
//     }
//   }
//   return sum;
// };
// console.log(beautySum("aabcbaa"));
var countPairs = function (n, edges, queries) {
  const map = new Map();

  for (let i = 1; i <= n; i++) {
    map.set(i, 0);
  }
  const countMap = new Map();
  for (const [i, j] of edges) {
    map.set(i, map.get(i) + 1);
    map.set(j, map.get(j) + 1);
    if (i > j) {
      countMap.set(i * (n + 1) + j, (countMap.get(i * (n + 1) + j) || 0) + 1);
    } else {
      countMap.set(j * (n + 1) + i, (countMap.get(j * (n + 1) + i) || 0) + 1);
    }
  }
  const pList = [...countMap.keys()];
  const countList = [0];
  for (let i = 1; i <= n; i++) {
    countList.push(i);
  }
  countList.sort((a, b) => map.get(a) - map.get(b));
  const res = new Array(queries.length).fill(0);
  queries.forEach((item, index) => {
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i < n; i++) {
      if (countList[i] === countList[i - 1]) {
        res[index] = dp[index - 1];
      } else {
        let j = n;
        while (
          map.get(countList[j - 1]) + map.get(countList[i]) > item &&
          j - 1 > i
        ) {
          j--;
        }
        if ((map.get(countList[j]) || 0) + map.get(countList[i]) > item) {
          res[index] += n - j + 1;
        }
      }
    }
    dp[index] = res[index];
    for (const p of pList) {
      const i = p % (n + 1);
      const j = ~~(p / (n + 1));
      const v = countMap.get(p);

      if (
        map.get(i) + map.get(j) > item &&
        map.get(i) + map.get(j) - v <= item
      ) {
        res[index]--;
      }
    }
  });
  return res;
};
const n = 5,
  edges = [
    [1, 5],
    [1, 5],
    [3, 4],
    [2, 5],
    [1, 3],
    [5, 1],
    [2, 3],
    [2, 5],
  ],
  queries = [1, 2, 3, 4, 5];

console.log(countPairs(n, edges, queries));
