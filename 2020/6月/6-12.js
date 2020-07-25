// var maxSubArray = function (nums) {
//   let l = nums.length,
//     sum = nums[0],
//     res = nums[0];
//   if (!l) return 0;
//   for (let i = 1; i < l; i++) {
//     if (sum < 0) {
//       if (nums[i] < 0) {
//         res = sum = sum > nums[i] ? sum : nums[i];
//       } else {
//         res = sum = nums[i];
//       }
//     } else {
//       sum += nums[i];
//       if (sum > res) {
//         res = sum;
//       }
//       if (sum < 0) sum = 0;
//       console.log(i, sum, res);
//     }
//   }
//   return res;
// };
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// var lengthOfLastWord = function (s) {
//   let l = s.length,
//     r = 0,
//     v = 0;
//   for (var i = 0; i < l; i++) {
//     if (s[i] !== " ") {
//       v++;
//     } else {
//       r = v || r;
//       v = 0;
//     }
//   }
//   return v || r;
// };
// var lengthOfLastWord = function (s) {
//   let l = s.length,
//     res = 0;
//   for (let i = l; i; i--) {
//     if (s[i - 1] !== " ") {
//       res++;
//     } else if (res && s[i - 1] === " ") {
//       return res;
//     }
//   }
//   return res;
// };
var plusOne = function (digits) {
  var a = digits.length,
    flag = true;
  for (let i = a; i; i--) {
    if (flag && digits[i - 1] + 1 > 9) {
      digits[i - 1] = 0;
    } else {
      digits[i - 1] += 1;
      flag = false;
      break;
    }
  }
  if (flag) digits.unshift(1);
};
