// var rearrangeBarcodes = function (barcodes) {
//   const map = new Map();
//   const l1 = barcodes.length;
//   for (const n of barcodes) {
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   let pre = NaN;
//   const res = [];
//   const list = [...map.entries()].sort((a, b) => b[1] - a[1]);
//   const l = list.length;
//   const sortList = (index = 0) => {
//     list[index][1]--;
//     while (index < l - 1 && list[index][1] < list[index + 1][1]) {
//       [list[index], list[index + 1]] = [list[index + 1], list[index]];
//       index++;
//     }
//   };
//   while (res.length < l1) {
//     let index = 0;
//     while (pre === list[index][0]) {
//       index++;
//     }
//     pre = list[index][0];
//     res.push(list[index][0]);
//     sortList(index);
//   }
//   return res;
// };
// var rearrangeBarcodes = function (barcodes) {
//   const map = new Map();
//   const l1 = barcodes.length;
//   for (const n of barcodes) {
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   barcodes.sort((a, b) => {
//     if (map.get(a) === map.get(b)) return a - b;
//     return map.get(b) - map.get(a);
//   });

//   const res = new Array(l1);
//   let index = 0;
//   for (let i = 0; i < l1; i += 2) {
//     res[i] = barcodes[index++];
//   }
//   for (let i = 1; i < l1; i += 2) {
//     res[i] = barcodes[index++];
//   }
//   return res;
// };
// const a = [1, 1, 1, 1, 2, 2, 3, 3];
// console.log(rearrangeBarcodes(a));
var maxEqualRowsAfterFlips = function (matrix) {
  const h = matrix.length;
  const w = matrix[0].length;
  const res = new Array(h).fill("");

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      res[i] += matrix[i][j] === matrix[i][0] ? "0" : "1";
    }
  }
  const map = new Map();
  for (const s of res) {
    map.set(s, (map.get(s) || 0) + 1);
  }
  const l2 = res.map((item) => new Set(item).size).filter((item) => item === 1)
    .length;
  return Math.max(l2, Math.max(...map.values()));
};
const matrix = [
  [0, 1],
  [1, 1],
];
console.log(maxEqualRowsAfterFlips(matrix));
