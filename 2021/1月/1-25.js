// var maxChunksToSorted = function (arr) {
//   const l = arr.length;
//   let c = 0;
//   let max = 0;
//   for (let i = 0; i < l; i++) {
//     max = Math.max(arr[i], max);
//     if (max === i) {
//       c++;
//       max = 0;
//     }
//   }
//   return c;
// };
var isIdealPermutation = function (A) {
  const l = A.length;

  for (let i = 1; i < l; i++) {
    if (Math.abs(A[i] - i) > 1) return false;
  }
  return true;
};
const A = [1, 2, 0];
console.log(isIdealPermutation(A));
