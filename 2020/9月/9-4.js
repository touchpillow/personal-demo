// var fractionToDecimal = function (numerator, denominator) {
//   if (!numerator) return "0";
//   const flag1 = numerator * denominator > 0 ? "" : "-";
//   if (numerator < 0) numerator *= -1;
//   if (denominator < 0) denominator *= -1;

//   let interG = Math.abs(~~(numerator / denominator));
//   let fenshu = numerator % denominator;
//   if (!fenshu) return `${flag1}${interG}`;
//   const map = new Map();
//   let res = `${interG}.`;
//   const stack = [];
//   while (fenshu) {
//     if (!map.has(fenshu)) {
//       map.set(fenshu, stack.length);
//     } else {
//       stack.splice(map.get(fenshu), 0, "(");
//       stack.push(")");
//       break;
//     }

//     fenshu *= 10;
//     interG = ~~(fenshu / denominator);
//     stack.push(interG);
//     fenshu = fenshu % denominator;
//   }
//   return `${flag1}${res}${stack.join("")}`;
// };

// console.log(fractionToDecimal(1, 6));
// var projectionArea = function (grid) {
//   const h = grid.length;
//   let count = 0;
//   if (!h) return h;
//   const w = grid[0].length;
//   const hV = new Array(w).fill(0);
//   for (let i = 0; i < h; i++) {
//     count += Math.max(...grid[i]);
//     for (let j = 0; j < w; j++) {
//       count += grid[i][j] ? 1 : 0;
//       hV[j] = Math.max(hV[j], grid[i][j]);
//     }
//   }
//   return count + hV.reduce((a, b) => a + b);
// };
// const a = [
//   [1, 0],
//   [0, 2],
// ];
// console.log(projectionArea(a));
var uncommonFromSentences = function (A, B) {
  const a = A.split(" ").concat(B.split(" "));
  const map = new Map();
  for (const s of a) {
    map.set(s, (map.get(s) || 0) + 1);
  }
  return [...map.entries].filter(([s, v]) => v == 1).map((i) => i[0]);
};
