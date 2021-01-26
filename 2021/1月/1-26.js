// var canTransform = function (start, end) {
//   const l = start.length;
//   let i1 = 0,
//     i2 = 0;
//   while (i1 < l && i2 < l) {
//     while (start[i1] === "X" && i1 < l) {
//       i1++;
//     }
//     while (end[i2] === "X" && i2 < l) {
//       i2++;
//     }
//     if (start[i1] !== end[i2]) return false;
//     if (start[i1] === "L" && i1 < i2) return false;
//     if (start[i1] === "R" && i1 > i2) return false;
//     i1++;
//     i2++;
//   }
//   return true;
// };
// console.log(canTransform("RXXLRXRXL", "XRLXXRRLX"));
var kthGrammar = function (N, K) {
  if (k === 0) return 0;
  const pre = ~~((K + 1) / 2);
  const prev = kthGrammar(N - 1, pre);
  return prev === 0 ? 1 - (K % 2) : K % 2;
};
