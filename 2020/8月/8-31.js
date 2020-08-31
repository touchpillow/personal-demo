// var peakIndexInMountainArray = function (A) {
//   let i = 1;
//   while (true) {
//     if (A[i] > A[i + 1]) return i;
//     i++;
//   }
// };
// var buddyStrings = function (A, B) {
//   const l1 = A.length;
//   if (l1 < 2) return false;
//   const l2 = B.length;
//   if (l1 !== l2) return false;
//   let left, right;
//   let flag = false;
//   let flag2 = false;
//   const set = new Set();
//   for (let i = 0; i < l1; i++) {
//     if (A[i] !== B[i]) {
//       if (left !== undefined && flag2) {
//         return false;
//       } else if (left !== undefined) {
//         if (A[left] !== B[i] || A[i] !== B[left]) return false;
//         flag2 = true;
//       } else {
//         left = i;
//       }
//     }
//     if (set.has(A[i])) {
//       flag = true;
//     } else {
//       set.add(A[i]);
//     }
//   }
//   return flag2 || (left === undefined && flag);
// };
// const a = "abac",
//   b = "abad";
// console.log(buddyStrings(a, b));
const maxP = (nums) => {
  if (nums.length < 2) return nums[0];
  let max = nums.reduce((a, b) => a * b);
  if (max > 0) return max;
  let index = 0;
  let sumleft = 1;
  let sumRight = 1;
  while (sumleft > 0) {
    sumleft *= nums[index];
    index++;
  }
  index = nums.length - 1;
  while (sumRight > 0) {
    sumRight *= nums[index];
    index--;
  }
  if (sumleft > sumRight) return max / sumleft;
  return max / sumRight;
};
var maxProduct = function (nums) {
  if (nums.length < 2) return nums[0];
  const res = [];
  let temp = [];
  for (const n of nums) {
    if (n === 0 && temp.length) {
      res.push(temp);
      temp = [];
    } else if (n !== 0) {
      temp.push(n);
    }
  }
  if (temp.length) res.push(temp);
  return Math.max(...res.map((item) => maxP(item)), 0);
};
// const a = [1];
// const a = [1, 1, 3];
// const a = [0, 1, 0];
const a = [0, 1, -1, 2, 0, 0, 2, 4];
console.log(maxProduct(a));
