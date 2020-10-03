// var NumMatrix = function (matrix) {
//   this.matrix = matrix;
//   this.cache = new Map();
// };

// /**
//  * @param {number} row1
//  * @param {number} col1
//  * @param {number} row2
//  * @param {number} col2
//  * @return {number}
//  */
// NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
//   return (
//     this.getCache(row2, col2) -
//     this.getCache(row1 - 1, col2) -
//     this.getCache(row2, col1 - 1) +
//     this.getCache(row1 - 1, col1 - 1)
//   );
// };

// NumMatrix.prototype.getCache = function (row1, col1) {
//   if (row1 < 0 || col1 < 0) return 0;
//   if (this.cache.get(`${row1}-${col1}`)) {
//     return this.cache.get(`${row1}-${col1}`);
//   }
//   let count = 0;
//   for (let i = 0; i <= row1; i++) {
//     for (let j = 0; j <= col1; j++) {
//       count += this.matrix[i][j];
//     }
//   }
//   this.cache.set(`${row1}-${col1}`, count);
//   return count;
// };
// const matrix = [
//   [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5],
// ];
// const n = new NumMatrix(matrix);
// console.log(n.sumRegion(2, 1, 4, 3));
// console.log(n.cache);
// console.log(n.sumRegion(1, 1, 2, 2));
// console.log(n.sumRegion(1, 2, 2, 4));
// var dayOfTheWeek = function (day, month, year) {
//     const a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     return a[new Date(`${year}-${month}-${day}`).getDay()]
// };
// balloon
var maxNumberOfBalloons = function (text) {
  const map = new Map();
  for (const s of text) {
    map.set(s, (map.get(s) || 0) + 1);
  }
  let b = 0;
  let a = 0;
  let l = 0;
  let o = 0;
  let n = 0;
  b = map.get("b") || 0;
  a = map.get("a") || 0;
  l = (map.get("l") || 0) / 2;
  o = (map.get("o") || 0) / 2;
  n = map.get("n") || 0;
  return Math.min(a, b, l, o, n);
};
