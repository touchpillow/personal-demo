// var singleNonDuplicate = function (nums) {
//   const l = nums.length;
//   if (l < 2) return nums[0];
//   let left = 0,
//     right = l - 1;
//   while (left < right) {
//     const mid = ~~((left + right) / 2);
//     if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
//       return nums[mid];
//     if (nums[mid] === nums[mid + 1] && mid % 2) {
//       right = mid - 1;
//     } else if (nums[mid] === nums[mid - 1] && !(mid % 2)) {
//       right = mid - 2;
//     } else if (nums[mid] === nums[mid - 1] && mid % 2) {
//       left = mid + 1;
//     } else {
//       left = mid + 2;
//     }
//   }
//   return nums[left];
// };
// const nums = [1, 2, 2, 3, 3];
// console.log(singleNonDuplicate(nums));
var updateMatrix = function (matrix) {
  const h = matrix.length;
  if (!h) return [];
  const w = matrix[0].length;
  const stack = [];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (matrix[i][j] === 0) {
        stack.push([i, j]);
      }
    }
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (matrix[i][j] !== 0) {
        let min = w + h + 2;
        stack.forEach((item) => {
          min = Math.min(Math.abs(i - item[0]) + Math.abs(j - item[1]), min);
        });
        matrix[i][j] = min;
      }
    }
  }

  return matrix;
};
const matrix = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
console.log(updateMatrix(matrix));
