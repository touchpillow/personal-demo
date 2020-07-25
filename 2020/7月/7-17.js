// var addStrings = function (num1, num2) {
//   const res = "";
//   const l1 = num1.length;
//   const l2 = num2.length;
//   const l = Math.max(l1, l2);
//   let i = 0;
//   let flag = false;
//   while (i < l) {
//     let a = 0;
//     let b = 0;
//     if (i < l1) {
//       a = Number(num1[l1 - 1 - i]);
//     }
//     if (i < l2) {
//       b = Number(num2[l2 - 1 - i]);
//     }
//     res = `${(a + b) % 10}res`;
//     flag = a + b > 9;
//     i++;
//   }
//   return res;
// };
var countSegments = function (s) {
  let res = 0;
  for (let i = 0, l = s.length; i < l; i++) {
    if (!i && s[i] !== " ") {
      res++;
    } else if (i && s[i - 1] === " " && s[i] !== " ") {
      res++;
    }
  }
  return res;
};
