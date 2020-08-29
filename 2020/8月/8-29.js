// const inRange = (value, min, max) => {
//   return value > min && value < max;
// };
// var isRectangleOverlap = function (rec1, rec2) {
//   const ax = (rec1[0] + rec1[2]) / 2;
//   const ay = (rec1[1] + rec1[3]) / 2;
//   const bx = (rec2[0] + rec2[2]) / 2;
//   const by = (rec2[1] + rec2[3]) / 2;
//   const h1 = rec1[3] - rec1[1];
//   const h2 = rec2[3] - rec2[1];
//   const w1 = rec1[2] - rec1[0];
//   const w2 = rec2[2] - rec2[0];
//   console.log(ax, ay, w1, h1);
//   console.log(bx, by, w2, h2);
//   return (
//     inRange(Math.abs(bx - ax), 0, (w1 + w2) / 2) &&
//     inRange(Math.abs(by - ay), 0, (h1 + h2) / 2)
//   );
// };
// const a = [4, 0, 6, 6],
//   b = [-5, -3, 4, 2];
// console.log(isRectangleOverlap(a, b));
var numMagicSquaresInside = function (grid) {
  const h = grid.length;
  let count = 0;
  if (!h) return count;
  const w = grid[0].length;
  if (h < 3 || w < 3) return count;
  for (let i = 0; i < h - 2; i++) {
    for (let j = 0; j < w - 2; j++) {
      if (checkGrid(i, j)) count++;
    }
  }
  function checkGrid(i, j) {
    const set = new Set();
    let rowSum;
    for (let row = 0; row < 3; row++) {
      let sum = 0;
      let cSum = 0;
      for (let col = 0; col < 3; col++) {
        if (set.has(grid[i + row][j + col])) return false;
        set.add(grid[i + row][j + col]);
        sum += grid[i + row][j + col];
        cSum += grid[j + col][i + row];
      }
      rowSum = rowSum || sum;
      if (sum !== rowSum) return false;
      if (rowSum !== cSum) return false;
    }
    if (grid[i][j] + grid[i + 2][j + 2] !== grid[i][j + 2] + grid[i + 2][j])
      return false;
    return true;
  }
  return count;
};
