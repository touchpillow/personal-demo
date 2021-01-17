// var countGoodRectangles = function (rectangles) {
//   let c = 0;
//   let max = 0;
//   for (const [w, h] of rectangles) {
//     if (Math.min(w, h) > max) {
//       c = 1;
//       max = Math.min(w, h);
//     } else if (Math.min(w, h) === max) {
//       c++;
//     }
//   }
//   return c;
// };
// var tupleSameProduct = function (nums) {
//   const l = nums.length;
//   const map = new Map();
//   let c = 0;
//   for (let i = 0; i < l - 1; i++) {
//     for (let j = i + 1; j < l; j++) {
//       map.set(nums[i] * nums[j], (map.get(nums[i] * nums[j]) || 0) + 1);
//     }
//   }
//   for (const value of map.values()) {
//     if (value >= 2) {
//       c += (value - 1) * value * 4;
//     }
//   }
//   return c;
// };
// const nums = [2, 3, 4, 6, 8, 12];
// console.log(tupleSameProduct(nums));
var largestSubmatrix = function (matrix) {
  const h = matrix.length;
  if (!h) return 0;
  const w = matrix[0].length;
  let max = 0;
  if (w === 1) {
    let pre = 0;
    for (let i = 0; i < h; i++) {
      if (matrix[i][0] === 1) {
        pre++;
      } else {
        max = Math.max(pre, max);
        pre = 0;
      }
    }
    max = Math.max(pre, max);
    return max;
  } else if (h === 1) {
    return matrix[0].filter((i) => i === 1).length;
  }
  const init = new Array(w).fill("").map((item, index) => index);

  for (let i = 0; i < h; i++) {
    let stack = init.slice();
    for (let j = i; j < h; j++) {
      const temp = [];
      for (const m of stack) {
        if (matrix[j][m] === 1) {
          temp.push(m);
        }
      }
      max = Math.max(temp.length * (j - i + 1), max);
      stack = temp;
    }
  }
  return max;
};
const matrix = [
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
];
console.log(largestSubmatrix(matrix));
