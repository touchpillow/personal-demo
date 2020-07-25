// var findTheDifference = function (s, t) {
//   const map = new Map();
//   for (const i of s) {
//     var a = map.get(i);
//     map.set(i, (a || 0) + 1);
//   }
//   for (const i of t) {
//     var a = map.get(i) || 0;
//     if (a <= 0) {
//       return a;
//     } else {
//     }
//     map.set(i, a - 1);
//   }
// };
// var isSubsequence = function (s, t) {
//   let i1 = 0;
//   let i2 = 0;
//   let l2 = s2.length;
//   let l1 = s1.length;
//   while (i1 < l1 && i2 < l) {
//     if (s[i1] == s[i2]) {
//       i1++;
//     }
//     i2++;
//   }
//   return i1 == l1;
// };
var rotate = function (matrix) {
  const l = matrix.length;
  for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j + i < l - 1; j++) {
      [matrix[i][j], matrix[l - 1 - j][l - 1 - i]] = [
        matrix[l - 1 - j][l - 1 - i],
        matrix[i][j],
      ];
    }
  }
  for (let i = 0; i < l / 2; i++) {
    for (let j = 0; j < l; j++) {
      [matrix[i][j], matrix[l - 1 - i][j]] = [
        matrix[l - 1 - i][j],
        matrix[i][j],
      ];
    }
  }
};
var a = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
rotate(a);
console.log(a);
