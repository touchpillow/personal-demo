// var addBinary = function (a, b) {
//   let flag = false,
//     l1 = a.length,
//     l2 = b.length,
//     res = "";
//   let l = Math.max(l1, l2);
//   if (l1 > l2) {
//     b = b.padStart(l, "0");
//   } else {
//     a = a.padStart(l, "0");
//   }
//   for (let i = 0; i < l; i++) {
//     let v = Number(flag) + +a[l - 1 - i] + +b[l - 1 - i];
//     if (v > 1) {
//       flag = true;
//     } else {
//       flag = false;
//     }
//     res = `${v % 2}${res}`;
//   }
//   if (flag) res = `1${res}`;
//   return res;
// };
// console.log(addBinary("", ""));
// var mySqrt = function (x) {
//   var i = 1;
//   while (true) {
//     if (i * i > x) {
//       return i - 1;
//     }
//     i++;
//   }
// };
var climbStairs = function (n) {
  let cache = { 1: 1, 2: 2 };
  const fn = (n) => {
    if (n == 1) return 1;
    if (n == 2) return 2;
    if (!cache[n]) {
      let a = fn(n - 1) + fn(n - 2);
      cache[n] = a;
      return a;
    } else {
      return cache[n];
    }
  };

  return fn(n);
};

var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  var a = 1,
    b = 2;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
