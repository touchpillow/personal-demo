// var combinationSum3 = function (k, n) {
//   const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const res = [];
//   const search = (nums, n, temp) => {
//     if (temp.length > k) return;
//     if (n < 0) return;
//     if (!n && temp.length == k) {
//       res.push(temp);
//       return;
//     }
//     nums.forEach((item, index) => {
//       const newNums = nums.slice();
//       newNums.splice(0, index + 1);
//       search(newNums, n - item, temp.concat(item));
//     });
//   };
//   search(a, n, []);
//   return res;
// };
// var combinationSum3 = (k, n) => {
//   var result = [];
//   var subresult = [];
//   function combineSub(start, subresult, n) {
//     //terminator
//     if (n < 0) return;
//     if (subresult.length == k && !n) {
//       result.push(subresult.slice(0));
//       return;
//     }
//     for (var i = start; i <= 9; i++) {
//       subresult.push(i);
//       combineSub(i + 1, subresult, n - i);
//       subresult.pop();
//     }
//   }
//   combineSub(1, subresult, n);
//   return result;
// };
// console.log(combinationSum3(3, 7));
// var largestPerimeter = function (A) {
//   A.sort((a, b) => a - b);
//   const l = A.length;
//   let l0 = l - 3;
//   while (l0 >= 0) {
//     if (A[l0] + A[l0 + 1] > A[l0 + 2]) return A[l0] + A[l0 + 1] + A[l0 + 2];
//     l0--;
//   }
//   return 0;
// };
var sortedSquares = function (A) {
  const l = A.length;
  const res = [];
  let left = 0;
  let right = l - 1;
  while (left <= right) {
    if (A[left] * A[left] >= A[right] * A[right]) {
      res.unshift(A[left] * A[left]);
      left++;
    } else {
      res.unshift(A[right] * A[right]);
      right--;
    }
  }
  return res;
};
