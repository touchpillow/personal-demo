// var clumsy = function (N) {
//   if (N === 1) {
//     return 1;
//   } else if (N === 2) {
//     return 2;
//   } else if (N === 3) {
//     return 6;
//   }
//   let init = ~~((N * (N - 1)) / (N - 2)) + N - 3;
//   N -= 4;
//   while (N >= 4) {
//     init -= ~~((N * (N - 1)) / (N - 2));
//     init += N - 3;
//     N -= 4;
//   }
//   if (N === 1) {
//     init -= 1;
//   } else if (N === 2) {
//     init -= 2;
//   } else if (N == 3) {
//     init -= 6;
//   }
//   return init;
// };
// var minDominoRotations = function (A, B) {
//   const set = new Set();
//   const l = A.length;
//   set.add(A[0]);
//   set.add(B[0]);
//   for (let i = 1; i < l; i++) {
//     if (!set.has(A[i]) && !set.has(B[i])) return -1;
//     for (const item of set) {
//       if (item !== A[i] && item !== B[i]) {
//         set.delete(item);
//       }
//     }
//   }
//   const values = [...set][0];
//   let v1 = 0,
//     v2 = 0;
//   for (let i = 1; i < l; i++) {
//     if (A[i] === values) v1++;
//     if (B[i] === values) v2++;
//   }
//   return Math.min(l - v1, l - v2);
// };
// const A = [2, 1, 2, 4, 2, 2],
//   B = [5, 2, 6, 2, 3, 2];
// console.log(minDominoRotations(A, B));
//  122 n n 4
// 012345 9 n
// n +  6 - n = 6 - 1
// var getMaximumConsecutive = function (coins) {
//   coins.sort((a, b) => a - b);
//   let cur = 0;
//   for (let i = 0; i < coins.length; i++) {
//     if (coins[i] > cur + 1) break;
//     cur += coins[i];
//   }
//   return cur + 1;
// };
