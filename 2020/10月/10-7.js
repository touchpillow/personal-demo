// var oddCells = function (n, m, indices) {
//   const map1 = new Map();
//   const map2 = new Map();
//   for (const [row, column] of indices) {
//     map1.set(row, (map1.get(row) || 0) + 1);
//     map2.set(column, (map2.get(column) || 0) + 1);
//   }
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (((map1.get(i) || 0) + (map2.get(j) || 0)) % 2) count++;
//     }
//   }
//   return count;
// };
// console.log(
//   oddCells(2, 2, [
//     [1, 1],
//     [0, 0],
//   ])
// );
// var shiftGrid = function (grid, k) {
//   for (let i = 0; i < k; i++) {
//     const temp = grid.map((item) => item.pop());
//     temp.unshift(temp.pop());
//     grid.forEach((item) => {
//       item.unshift(temp.shift());
//     });
//   }
//   return grid;
// };
var shiftGrid = function (grid, k) {
  const h = grid.length;
  const w = grid[0].length;
  k = k % (h * w);
  const a = ~~(k / w);
  const b = k % w;
  grid.splice(0, 0, ...grid.splice(h - a, h));
  for (let i = 0; i < b; i++) {
    const temp = grid.map((item) => item.pop());
    temp.unshift(temp.pop());
    grid.forEach((item) => {
      item.unshift(temp.shift());
    });
  }
  return grid;
};
