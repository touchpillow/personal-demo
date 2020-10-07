// var checkStraightLine = function (coordinates) {
//   const l = coordinates.length;
//   if (l == 2) return true;
//   let v;
//   v =
//     (coordinates[1][1] - coordinates[0][1]) /
//     (coordinates[1][0] - coordinates[0][0]);
//   for (let i = 1; i < l - 1; i++) {
//     const temp =
//       (coordinates[i + 1][1] - coordinates[i][1]) /
//       (coordinates[i + 1][0] - coordinates[i][0]);
//     if (v == Infinity && coordinates[i + 1][0] - coordinates[i][0] === 0)
//       continue;
//     if (temp !== v) return false;
//   }
//   return true;
// };
var maxProfit = function (prices) {
  const l = prices.length;
  if (l < 2) return 0;
  if (l == 2) return Math.max(prices[1] - prices[0], 0);
  const res = new Array(l);
  res[0] = 0;
  res[1] = Math.max(prices[1] - prices[0], 0);
  for (let i = 2; i < l; i++) {
    res[i] = Math.max();
  }
};
