// var heightChecker = function (heights) {
//   const a = [...heights].sort((a, b) => a - b);
//   const l = heights.length;
//   let count = 0;
//   for (let i = 0; i < l; i++) {
//     if (heights[i] !== a[i]) count++;
//   }
//   return count;
// };
// const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
// var gcdOfStrings = function (str1, str2) {
//   if (`${str1}${str2}` !== `${str2}${str1}`) return "";

//   return str1.slice(0, gcd(str1.length, str2.length));
// };
// var searchMatrix = function (matrix, target) {
//   const h = matrix.length;
//   if (!h) return false;
//   const w = matrix[0].length;

//   let ymin = 0,
//     ymax = h - 1;
//   let xmin = 0,
//     xmax = w - 1;
//   if (target < matrix[ymin][xmin]) return false;
//   if (target > matrix[ymax][xmax]) return false;
//   const xList = [];
//   const yList = [];
//   for (let i = 0; i < h; i++) {
//     if (matrix[i][0] == target || matrix[i][w - 1] == target) return true;
//     if (matrix[i][0] < target && matrix[i][w - 1] > target) yList.push(i);
//   }
//   for (let i = 0; i < w; i++) {
//     if (matrix[0][i] == target || matrix[h - 1][i] == target) return true;
//     if (matrix[0][i] < target && matrix[h - 1][i] > target) xList.push(i);
//   }
//   for (const y of yList) {
//     for (const x of xList) {
//       if (matrix[y][x] == target) return true;
//     }
//   }
//   return false;
// };
var searchMatrix = function (matrix, target) {
  const h = matrix.length;
  if (!h) return false;
  const w = matrix[0].length;

  let x = w - 1,
    y = 0;
  if (target < matrix[0][0]) return false;
  if (target > matrix[h - 1][w - 1]) return false;
  while (x >= 0 && y <= h - 1) {
    if (matrix[y][x] == target) return true;
    if (matrix[y][x] < target) {
      y++;
    } else {
      x--;
    }
  }
  return false;
};
