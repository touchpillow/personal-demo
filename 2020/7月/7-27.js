// var fib = function (N) {
//   if (!N) {
//     return 0;
//   } else if (N == 1) {
//     return 1;
//   }
//   let a = 0;
//   let b = 1;
//   for (let i = 2; i <= N; i++) {
//     [a, b] = [b, a + b];
//   }
//   return b;
// };
// console.log(fib(6));
// var detectCapitalUse = function (word) {
//   const l = word.length;
//   if (l < 2) return true;
//   const s = word.slice(1);
//   const start = word[0].charCodeAt();
//   if (start > 96) {
//     for (const i of s) {
//       if (i.charCodeAt() < 91) return false;
//     }
//   } else {
//     for (const i of s) {
//       if (i.charCodeAt() > 96) return false;
//     }
//   }
//   return true;
// };
var searchMatrix = function (matrix, target) {
  const h = matrix.length;
  if (!h) return false;
  const w = matrix[0].length;
  let start = 0;
  let end = h * w - 1;
  while (true) {
    if (
      res[~~(start / w)][start % w] === target ||
      res[~~(end / w)][end % w] === target
    )
      return true;
    if (start === end) return false;
    const middle = Math.floor((start + end) / 2);
    const v = res[~~(middle / w)][middle % w];
    if (v === target) return true;
    if (v > target) {
      end = middle;
    } else {
      start = middle;
    }
  }
};
var target = 3;
var a = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];
console.log(searchMatrix(a, target));
