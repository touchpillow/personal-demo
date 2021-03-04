var numSubarraysWithSum = function (A, S) {
  const stack = [];
  let c = 0;
  for (const n of A) {
    if (n === 1) {
      stack.push(c);
      c = 0;
    } else {
      c++;
    }
  }
  if (!stack.length) {
    if (S === 0) return (A.length * (A.length - 1)) / 2;
    return 0;
  }
  stack.push(c);
  if (!S) {
    return stack.reduce((sum, a) => sum + a + ((a - 1) * a) / 2, 0);
  }
  const l = stack.length;
  let res = 0;
  for (let i = 0; i + S < l; i++) {
    res += (stack[i] + 1) * (stack[i + S] + 1);
  }
  return res;
};
// var minFallingPathSum = function (matrix) {
//   const n = matrix.length;
//   const dp1 = matrix[0].slice();
//   const dp2 = new Array(n);
//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (j === 0) {
//         dp2[j] = Math.min(dp1[j], dp1[j + 1]) + matrix[i][j];
//       } else if (j === n - 1) {
//         dp2[j] = Math.min(dp1[j], dp1[j - 1]) + matrix[i][j];
//       } else {
//         dp2[j] = Math.min(dp1[j], dp1[j - 1], dp1[j + 1]) + matrix[i][j];
//       }
//     }
//     for (let j = 0; j < n; j++) {
//       dp1[j] = dp2[j];
//     }
//   }
//   return Math.min(...dp1);
// };
