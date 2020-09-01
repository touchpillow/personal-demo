// var findMin = function (nums) {
//   const l = nums.length;
//   if (l < 2) return nums[0];
//   let min = nums[0];
//   for (const n of nums) {
//     min = min < n ? min : n;
//   }
//   return n;
// };
// var findMin = function (nums) {
//   let left = 0,
//     right = nums.length - 1;
//   if (nums[left] < nums[right]) return nums[0];
//   while (left !== right) {
//     let middle = ~~((left + right) / 2);
//     if (middle === left) {
//       if (nums[left] > nums[right]) {
//         left = right;
//       } else {
//         right = left;
//       }
//     } else if (nums[middle] > nums[left]) {
//       left = middle;
//     } else {
//       right = middle;
//     }
//   }
//   return nums[left];
// };
// const a = [4, 0, 1, 2, 3];
// console.log(findMin(a));
// var lemonadeChange = function (bills) {
//   let five = 0;
//   let ten = 0;
//   for (const n of bills) {
//     if (n == 10) {
//       if (!five) return false;
//       five--;
//       ten++;
//     } else if (n == 20) {
//       if (five && ten) {
//         five--;
//         ten--;
//       } else {
//         if (five < 3) return false;
//         five -= 3;
//       }
//     } else {
//       five++;
//     }
//   }
//   return true;
// };
// const a = [5, 5, 5, 5, 10, 5, 10];
// console.log(lemonadeChange(a));
// var transpose = function (A) {
//   const h = A.length;
//   const w = A[0].length;
//   const res = new Array(w).fill("").map(() => new Array(h));
//   for (let i = 1; i < w; i++) {
//     for (let j = 0; j / i < w / h; j++) {
//       res[j][i] = A[i][j];
//     }
//   }
//   return res;
// };
// const a = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// console.log(transpose(a));
var isMatch = function (s, p) {
  const ls = s.length;
  const lp = p.length;
  if (!ls && !lp) return true;
  let sIndex = 0;
  let pIndex = 0;
  const regList = [".", "*"];
  while (sIndex < ls && pIndex < lp) {}
};
