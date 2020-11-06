// var lastRemaining = function (n) {
//   let res = new Array(n).fill("").map((item, index) => index + 1);
//   while (res.length > 1) {
//     res = res.filter((item, index) => index % 2);
//     const l = res.length;
//     if (l == 1) break;
//     if (l % 2) {
//       res = res.filter((item, index) => index % 2);
//     } else {
//       res = res.filter((item, index) => !(index % 2));
//     }
//   }
//   return res[0];
// };
// console.log(lastRemaining(9));
var calculate = function (s) {
  let x = 1,
    y = 0;
  for (const n of s) {
    if (n == "A") {
      x = 2 * x + y;
    } else {
      y = 2 * y + x;
    }
  }
  return x + y;
};
