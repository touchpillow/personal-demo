// var replaceElements = function (arr) {
//   const l = arr.length;
//   const res = new Array(l);
//   let max = -1;
//   res[l - 1] = max;
//   if (l < 2) return res;
//   for (let i = l - 2; i >= 0; i--) {
//     max = arr[i + 1] > max ? arr[i + 1] : max;
//     res[i] = max;
//   }
//   return res;
// };
// const a = [17, 18, 5, 4, 6, 1];
// console.log(replaceElements(a));
// var sumZero = function (n) {
//   const res = new Array(n);
//   let v = 0;
//   for (let i = 1; i < n; i++) {
//     v += i;
//     res[i] = i;
//   }
//   res[0] = -1 * v;
//   return res;
// };
var bulbSwitch = function (n) {
  if (!n) return 0;
  let v = 0;
  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(Math.sqrt(i))) v++;
  }
  return v;
};
console.log(bulbSwitch(4));
