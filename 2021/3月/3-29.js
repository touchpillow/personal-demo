// var twoCitySchedCost = function (costs) {
//   const dis = costs.map((item, index) => index);
//   dis.sort(
//     (a, b) =>
//       Math.abs(costs[b][0] - costs[b][1]) - Math.abs(costs[a][0] - costs[a][1])
//   );
//   let v1 = 0,
//     v2 = 0;
//   let c = 0;
//   console.log(dis);
//   const l = costs.length;
//   for (let i = 0; i < l; i++) {
//     if (v1 < l / 2 && v2 < l / 2) {
//       if (costs[dis[i]][0] < costs[dis[i]][1]) {
//         c += costs[dis[i]][0];
//         v1++;
//       } else {
//         c += costs[dis[i]][1];

//         v2++;
//       }
//     } else if (v1 < l / 2) {
//       c += costs[dis[i]][0];

//       v1++;
//     } else {
//       c += costs[dis[i]][1];

//       v2++;
//     }
//   }
//   return c;
// };
// const a = [
//   [259, 770],
//   [448, 54],
//   [926, 667],
//   [184, 139],
//   [840, 118],
//   [577, 469],
// ];
// console.log(twoCitySchedCost(a));
// var maxSumTwoNoOverlap = function (A, L, M) {
//   const l = A.length;
//   const lList = new Array(l).fill(0);
//   const mList = new Array(l).fill(0);
//   const sumLeft = new Array(l).fill(0);
//   sumLeft[0] = A[0];
//   for (let i = 1; i < l; i++) {
//     sumLeft[i] = sumLeft[i - 1] + A[i];
//   }
//   for (let i = 0; i + L - 1 < l; i++) {
//     lList[i] = A[i] + sumLeft[i + L - 1] - sumLeft[i];
//   }
//   for (let i = 0; i + M - 1 < l; i++) {
//     mList[i] = A[i] + sumLeft[i + M - 1] - sumLeft[i];
//   }
//   let max = 0;
//   for (let i = 0; i + L + M - 1 < l; i++) {
//     for (let j = i + L; j + M - 1 < l; j++) {
//       max = Math.max(max, lList[i] + mList[j]);
//     }
//   }
//   for (let i = 0; i + L + M - 1 < l; i++) {
//     for (let j = i + M; j + L - 1 < l; j++) {
//       max = Math.max(max, mList[i] + lList[j]);
//     }
//   }
//   return max;
// // };
// const A = [0, 6, 5, 2, 2, 5, 1, 9, 4],
//   L = 1,
//   M = 2;
// console.log(maxSumTwoNoOverlap(A, L, M));
var maxSumTwoNoOverlap = function (A, L, M) {
  const l = A.length;
  const lList = new Array(l).fill(0);
  const mList = new Array(l).fill(0);
  const sumLeft = new Array(l).fill(0);
  sumLeft[0] = A[0];
  for (let i = 1; i < l; i++) {
    sumLeft[i] = sumLeft[i - 1] + A[i];
  }
  for (let i = 0; i + L - 1 < l; i++) {
    lList[i] = A[i] + sumLeft[i + L - 1] - sumLeft[i];
  }
  for (let i = 0; i + M - 1 < l; i++) {
    mList[i] = A[i] + sumLeft[i + M - 1] - sumLeft[i];
  }
  let max = 0;
  const maxLKLeftList = new Array(l).fill(0);
  for (let i = L - 1; i + 1 <= l; i++) {
    maxLKLeftList[i] = Math.max(maxLKLeftList[i - 1] || 0, lList[i - L + 1]);
  }
  const maxMLeftList = new Array(l).fill(0);
  for (let i = M - 1; i + 1 <= l; i++) {
    maxMLeftList[i] = Math.max(maxMLeftList[i - 1] || 0, mList[i - M + 1]);
  }
  const maxLKRightList = new Array(l).fill(0);
  for (let i = l - L; i >= 0; i--) {
    maxLKRightList[i] = Math.max(maxLKRightList[i + 1] || 0, lList[i]);
  }
  const maxMRightList = new Array(l).fill(0);
  for (let i = l - M; i >= 0; i--) {
    maxMRightList[i] = Math.max(maxMRightList[i + 1] || 0, mList[i]);
  }
  for (let i = Math.min(L - 1, M - 1); i + L < l || i + M < l; i++) {
    max = Math.max(
      max,
      maxLKLeftList[i] + maxMRightList[i + 1],
      maxMLeftList[i] + maxLKRightList[i + 1]
    );
  }
  return max;
};
const A = [17, 8, 10, 6, 4, 10, 5, 18, 18, 5, 15, 15, 14, 0, 12, 11, 18],
  L = 9,
  M = 3;
console.log(maxSumTwoNoOverlap(A, L, M));
