// var getLeastNumbers = function (arr, k) {
//   const res = [];
//   for (const item of arr) {
//     const l = res.length;
//     if (!l) {
//       res.push(item);
//       continue;
//     }
//     let i = 0;
//     for (; i < l; i++) {
//       if (res[i] > item) break;
//     }
//     res.splice(i, 0, item);
//   }
//   return res.slice(0, k);
// };
// var maxSubArray = function (nums) {
//   let sum = nums[0];
//   let pre = nums[0];
//   const l = nums.length;
//   for (let i = 1; i < l; i++) {
//     pre = Math.max(nums[i], pre + nums[i]);
//     sum = Math.max(pre, sum);
//   }
//   return sum;
// };
// var firstUniqChar = function (s) {
//   if (!s) return " ";
//   const map = {};
//   const res = [];
//   for (const item of s) {
//     if (map[item] !== undefined) {
//       map[item] = false;
//     } else {
//       map[item] = true;
//     }
//     res.push(item);
//   }
//   return res.find((item) => map[item] === undefined) || " ";
// };
// var numberOfArithmeticSlices = function (A) {
//   let c = 0;
//   const l = A.length;
//   const search = (len, pre, dis) => {
//     if (pre >= l) return;
//     if (!len) {
//       for (let i = pre + 1; i < l; i++) {
//         search(len + 1, i, 0);
//       }
//     } else if (len == 1) {
//       search(len + 1, pre + 1, A[pre + 1] - A[pre]);
//     } else if (len >= 2 && A[pre + 1] - A[pre] === dis) {
//       c++;
//       search(len + 1, pre + 1, dis);
//     }
//   };
//   search(0, -1, 0);
//   return c;
// };
var numberOfArithmeticSlices = function (A) {
  let c = 0;
  let sum = 0;
  const l = A.length;
  for (let i = 2; i < l; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      c++;
      sum += c;
    } else {
      c = 0;
    }
  }
  return sum;
};
const a = [1, 2, 3, 4, 5, 6];
console.log(numberOfArithmeticSlices(a));
