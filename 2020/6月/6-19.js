// var generate = function (numRows) {
//   if (!numRows) return [];
//   if (numRows === 1) return [[1]];
//   var res = [[1]];
//   while (numRows > 1) {
//     const item = res[res.length - 1];
//     const v = [];
//     item.forEach((t, i) => {
//       if (i) {
//         v.push(item[i - 1] + t);
//       } else {
//         v.push(1);
//       }
//     });
//     v.push(1);
//     res.push(v);
//     numRows--;
//   }
//   return res;
// };
// var getNext = (last, row) => {
//   if (row < 0) return last;
//   if (!last) last = [];
//   var v = [],
//     l = last.length,
//     t = Math.floor(l / 2) + 1;
//   for (let i = 0; i < t; i++) {
//     v[i] = v[l - i] = !i ? 1 : last[i - 1] + last[i];
//   }
//   return getNext(v, row - 1);
// };
// var getRow = function (rowIndex) {
//   return getNext(null, rowIndex);
// };
// console.log(getRow(2));
// var maxProfit = function (prices) {
//   let l = prices.length;
//   if (l < 2) return 0;
//   let min = Infinity,
//     max = -Infinity,
//     res = 0;
//   for (let i = 0; i < l; i++) {
//     if (prices[i] > max) {
//       max = prices[i];
//       res = Math.max(max - min, res);
//     }
//     if (prices[i] < min) {
//       min = max = prices[i];
//     }
//   }
//   return res;
// };
var maxProfit = function (prices) {
  var res = 0;
  var min = Infinity;
  prices.forEach((i) => {
    if (i < min) {
      min = i;
    } else {
      if (i > min) {
        res = Math.max(res, i - min);
      }
    }
  });
  return res;
};
