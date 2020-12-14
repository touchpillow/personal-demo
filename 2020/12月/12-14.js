// var findDiagonalOrder = function (matrix) {
//   const h = matrix.length;
//   const res = [];
//   if (!h) return res;
//   const w = matrix[0].length;
//   let cur = 0;
//   while (cur <= w + h - 2) {
//     const temp = [];
//     for (let i = Math.min(h - 1, cur); i >= 0 && cur - i < w; i--) {
//       temp.push(matrix[i][cur - i]);
//     }
//     if (cur % 2) {
//       res.push(...temp.reverse());
//     } else {
//       res.push(...temp);
//     }
//     cur++;
//   }
//   return res;
// };
// const a = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(findDiagonalOrder(a));
// var nextGreaterElements = function (nums) {
//   const l = nums.length;
//   if (!l) return [];
//   if (l < 2) return [-1];
//   const sortList = nums.slice();
//   const res = new Array(l).fill(-1);
//   for (let i = 0; i < l; i++) {
//     sortList.shift();
//     let left = 0;
//     while (left < l - 1 && sortList[left] <= nums[i]) {
//       left++;
//     }
//     if (left < l - 1) {
//       res[i] = sortList[left];
//     }
//     sortList.push(nums[i]);
//   }
//   return res;
// };
// const a = [5, 4, 3, 2, 1];
// console.log(nextGreaterElements(a));
var nextGreaterElements = function (nums) {
  const l = nums.length;
  if (!l) return [];
  if (l === 1) return [-1];
  const res = new Array(l).fill(-1);
  const stack = [0];
  for (let i = 1; i < l; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      const pre = stack.pop();
      res[pre] = num[i];
    }
    stack.push(i);
  }
  for (let i = 0; i < l; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      const pre = stack.pop();
      if (res[pre] !== -1) continue;
      res[pre] = num[i];
    }
    stack.push(i);
  }
  return res;
};
