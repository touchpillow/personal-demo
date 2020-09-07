// var smallestRangeI = function (A, K) {
//   const l = A.length;
//   if (l < 2) return 0;
//   let max = A[0],
//     min = A[0];
//   for (const n of A) {
//     max = max > n ? max : n;
//     min = min < n ? min : n;
//   }
//   return Math.abs(min - max) > 2 * K ? Math.abs(min - max) - 2 * K : 0;
// };
// const gcd = (a, b) => {
//   return b === 0 ? a : gcd(b, a % b);
// };
// var hasGroupsSizeX = function (deck) {
//   const map = new Map();
//   const l = deck.length;
//   let count;
//   for (const n of deck) {
//     map.set(n, (map.get(n) || 0) + 1);
//     count = map.get(n);
//   }

//   for (const v of map.values()) {
//     count = gcd(v, count);
//   }
//   return count >= 2;
// };
// const a = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2];
// console.log(hasGroupsSizeX(a));
var numIslands = function (grid) {
  const h = grid.length;
  if (!h) return 0;
  const w = grid[0].length;
  let count = 0;
  const dep = (i, j) => {
    if (i >= h || i < 0) return;
    if (j >= w || j < 0) return;
    if (grid[i][j] !== "1") return;
    grid[i][j] = "*";
    dep(i, j + 1);
    dep(i, j - 1);
    dep(i + 1, j);
    dep(i - 1, j);
  };
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] == "1") {
        count++;
        dep(i, j);
      }
    }
  }

  return count;
};
