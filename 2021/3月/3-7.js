// var countPairs = function (n, edges, queries) {
//   const map = new Map();

//   for (let i = 1; i <= n; i++) {
//     map.set(i, 0);
//   }
//   const countMap = new Map();
//   for (const [i, j] of edges) {
//     map.set(i, map.get(i) + 1);
//     map.set(j, map.get(j) + 1);
//     if (i > j) {
//       countMap.set(i * (n + 1) + j, (countMap.get(i * (n + 1) + j) || 0) + 1);
//     } else {
//       countMap.set(j * (n + 1) + i, (countMap.get(j * (n + 1) + i) || 0) + 1);
//     }
//   }
//   const pList = [...countMap.keys()];
//   const countList = [0];
//   for (let i = 1; i <= n; i++) {
//     countList.push(i);
//   }
//   countList.sort((a, b) => map.get(a) - map.get(b));
//   console.log(map);
//   console.log(countList);
//   const res = new Array(queries.length).fill(0);
//   queries.forEach((item, index) => {
//     const dp = new Array(n + 1).fill(0);
//     for (let i = 1; i < n; i++) {
//       if (countList[i] === countList[i - 1]) {
//         res[index] = dp[index - 1];
//       } else {
//         let j = n;
//         while (
//           map.get(countList[j - 1]) + map.get(countList[i]) > item &&
//           j - 1 > i
//         ) {
//           j--;
//         }
//         if ((map.get(countList[j]) || 0) + map.get(countList[i]) > item) {
//           if (index === 3) {
//             console.log(i, j, countList[i], countList[j]);
//           }
//           res[index] += n - j + 1;
//         }
//       }
//     }

//     dp[index] = res[index];
//     for (const p of pList) {
//       const i = p % (n + 1);
//       const j = ~~(p / (n + 1));
//       const v = countMap.get(p);

//       if (
//         map.get(i) + map.get(j) > item &&
//         map.get(i) + map.get(j) - v <= item
//       ) {
//         res[index]--;
//       }
//     }
//   });
//   return res;
// };
// const n = 5,
//   edges = [
//     [1, 5],
//     [1, 5],
//     [3, 4],
//     [2, 5],
//     [1, 3],
//     [5, 1],
//     [2, 3],
//     [2, 5],
//   ],
//   queries = [1, 2, 3, 4, 5];

// console.log(countPairs(n, edges, queries));
var minIncrementForUnique = function (A) {
  A.sort((a, b) => a - b);
  let c = 0;
  const l = A.length;
  for (let i = 1; i < l; i++) {
    if (A[i] <= A[i - 1]) {
      c += A[i - 1] + 1 - A[i];
      A[i] = A[i - 1] + 1;
    }
  }
  return c;
};
