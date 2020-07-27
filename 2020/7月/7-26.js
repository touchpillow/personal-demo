// var findRelativeRanks = function (nums) {
//   const copy = nums.slice().sort((a, b) => b - a);
//   const l = nums.length;
//   const res = new Map();
//   for (let i = 0; i < l; i++) {
//     switch (i) {
//       case 0:
//         res.set(copy[i], "Gold Medal");
//         break;
//       case 1:
//         res.set(copy[i], "Silver Medal");
//         break;
//       case 2:
//         res.set(copy[i], "Bronze Medal");
//         break;
//       default:
//         res.set(icopy[i], i + 1);
//     }
//   }
//   return nums.map((i) => map.get(i));
// };
// var checkPerfectNumber = function (num) {
//   let sum = 1;
//   const max = ~~Math.sqrt(num, 2);
//   for (let i = 2; i <= max; i++) {
//     if (!(num % i)) {
//       if (num / i !== i) {
//         sum += i + num / i;
//       } else {
//         sum += i;
//       }
//     }
//   }
//   return sum === num;
// };
// var simplifyPath = function (path) {
//   const pathStack = path.split("/");
//   const res = [];
//   const l = path.length;
//   for (const i of pathStack) {
//     if (i === "..") {
//       res.pop();
//     } else if (i && i !== ".") {
//       res.push(i);
//     }
//   }
//   return `/${res.join("/")}`;
// };
// // "/a//b////c/d//././/.."
// console.log(simplifyPath("/a//b"));
var setZeroes = function (matrix) {
  const h = matrix.length;
  if (!l) return;
  const row = new Set();
  const column = new Set();
  const w = matrix[0].length;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!matrix[i][j]) {
        row.add(i);
        column.add(j);
      }
    }
  }
  for (const r of row) {
    matrix.splice(r, 1, new Array(w).fill(0));
  }
  for (const c of column) {
    matrix.forEach((i) => {
      i[c] = 0;
    });
  }
};
