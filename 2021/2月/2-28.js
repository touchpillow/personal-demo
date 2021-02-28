// var sortArray = function (nums) {
//   const res = [];
//   for (const n of nums) {
//     const i = res.findIndex((item) => item >= nums);
//     if (i < 0) {
//       res.push(n);
//     } else {
//       res.splice(i, 0, n);
//     }
//   }
//   return res;
// };
// const find = (A) => {
//   let i = 1;
//   let max = A[0];
//   let right = A.slice(i);
//   let min = Math.min(...right);
//   while (max > min) {
//     let p = -1;
//     for (let i = 0; i < right.length; i++) {
//       if (right[right.length - 1 - i] < max) {
//         p = right.length - 1 - i;
//         break;
//       }
//     }
//     if (p < 0) return A.length;
//     i += p + 1;
//     if (i >= A.length) return A.length;
//     right = A.slice(i);
//     max = Math.max(...A.slice(0, i));
//     min = Math.min(...right);
//   }
//   return i;
// };

// var partitionDisjoint = function (A) {
//   const right = A.slice().reverse();
//   return Math.min(find(A), find(right));
// };
// const a = [5, 0, 3, 8, 6];
// console.log(partitionDisjoint(a));
var partitionDisjoint = function (A) {
  const l = A.length;
  const left = new Array(l);
  const right = new Array(l);
  left[0] = A[0];
  right[l - 1] = A[l - 1];
  for (let i = 1; i < l; i++) {
    left[i] = Math.max(left[i - 1], A[i]);
    right[l - 1 - i] = Math.min(right[l - i], A[l - 1 - i]);
  }
  for (let i = 0; i < l - 1; i++) {
    if (left[i] <= right[i + 1]) return i + 1;
  }
};
