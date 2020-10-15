// var isValidSerialization = function (preorder) {
//   const list = preorder.split(",");
//   let v = 1;
//   for (const n of list) {
//     if (v == 0) return false;
//     if (n !== "#") {
//       v++;
//     } else {
//       v--;
//     }
//   }
//   return !v;
// };
// const a = "9,#,92,#,#";

// var isValidSerialization = function (preorder) {
//   const l = preorder.length;
//   let v = 1;
//   for (let i = 0; i < l; i++) {
//     if (preorder[i] !== ",") {
//       v--;
//       if (i == l - 1 && preorder[i] !== "#") {
//         v += 2;
//       }
//     } else if (preorder[i] == ",") {
//       if (preorder[i - 1] !== "#") {
//         v += 2;
//       }
//     }
//     if (v < 0) return false;
//   }
//   return v == 0;
// };
// console.log(isValidSerialization(a));
// var kWeakestRows = function (mat, k) {
//   const m = mat.length;
//   const list = mat.map((item) => item.filter((i) => i == 1).length);
//   const res = new Array(m);
//   for (let i = 0; i < m; i++) {
//     res[i] = i;
//   }
//   return res
//     .sort((a, b) => {
//       if (list[a] == list[b]) {
//         return a - b;
//       } else {
//         return list[a] - list[b];
//       }
//     })
//     .slice(0, k);
// };
// const mat = [
//     [1, 1, 0, 0, 0],
//     [1, 1, 1, 1, 0],
//     [1, 0, 0, 0, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 1, 1, 1],
//   ],
//   k = 3;
// console.log(kWeakestRows(mat, k));
var numberOfSteps = function (num) {
  let c = 0;
  while (num) {
    if (num % 2) {
      num -= 1;
    } else {
      num /= 2;
    }
  }
  return c;
};
