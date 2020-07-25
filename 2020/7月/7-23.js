// var findMaxConsecutiveOnes = function (nums) {
//   let res = 0;
//   let temp = 0;
//   for (const i of nums) {
//     if (i) {
//       temp++;
//     } else {
//       res = temp > res ? temp : res;
//       temp = 0;
//     }
//   }
//   res = temp > res ? temp : res;
//   return res;
// };
// var constructRectangle = function (area) {
//   let l = ~~Math.sqrt(area, 2);
//   while (true) {
//     if ((area / l) % 1) {
//       l++;
//     } else {
//       return [l, area / l];
//     }
//   }
// };

var uniquePaths = function (m, n) {
  const res = new Array(n).fill("").map(() => new Array(m));
  res[0] = new Array(m).fill(1);
  res.forEach((i) => {
    i[0] = 1;
  });
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      res[i][j] = res[i - 1][j] + res[i][j - 1];
    }
  }
  return res[n - 1][m - 1];
};
uniquePaths(3, 2);
