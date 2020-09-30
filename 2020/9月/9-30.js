// var tribonacci = function (n) {
//   let a = 0;
//   let b = 1;
//   let c = 1;
//   if (n == 0) return a;
//   if (n == 1) return b;
//   while (n > 2) {
//     [a, b, c] = [b, c, a + b + c];
//     n--;
//   }
//   return c;
// };
// var dayOfYear = function (date) {
//   const time = 24 * 3600 * 1000;
//   const cur = new Date(date).getTime();
//   const start = new Date(`${date.slice(0, 3)}-01-01`).getTime();
//   return Math.ceil((cur - start) / time);
// };
var hIndex = function (citations) {
  const l = citations.length;
  let le;
  for (let i = 0; i < l; i++) {
    if (citations[i] >= l - i) return l - i;
  }
  return 0;
};
