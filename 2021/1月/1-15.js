// var minimumDeleteSum = function (s1, s2) {
//   const l1 = s1.length;
//   const l2 = s2.length;
//   let dp = new Array(l2 + 1).fill(0);
//   let dp2 = new Array(l2 + 1).fill(0);
//   for (let i = 1; i <= l2; i++) {
//     dp[i] = dp[i - 1] + s2[i - 1].charCodeAt();
//     dp2[i] = dp[i];
//   }
//   for (let i = 1; i <= l1; i++) {
//     dp2[0] += s1[i - 1].charCodeAt();
//     for (let j = 1; j <= l2; j++) {
//       if (s1[i - 1] === s2[j - 1]) {
//         dp2[j] = dp[j - 1];
//       } else {
//         dp2[j] = Math.min(
//           dp[j] + s1[i - 1].charCodeAt(),
//           dp2[j - 1] + s2[j - 1].charCodeAt()
//         );
//       }
//     }
//     const pre = dp2[0];
//     for (let i = 0; i <= l2; i++) {
//       dp[i] = dp2[i];
//       dp2[i] = 0;
//     }
//     dp2[0] = pre;
//   }
//   return dp[l2];
// };
// console.log(minimumDeleteSum("ccaccjp", "fwosarcwge"));
var numSubarrayProductLessThanK = function (nums, k) {
  const l = nums.length;
  let left = 0,
    right = 0;
  let pre = 1;
  if (!k) return 0;
  let c = 0;
  while (right < l) {
    pre *= nums[right];
    while (pre >= k && left < right) {
      pre /= nums[left];
      left++;
    }
    if (pre < k) {
      c += right - left + 1;
    }
    right++;
  }
  return c;
};
const nums = [10, 5, 2, 6],
  k = 100;
console.log(numSubarrayProductLessThanK(nums, k));
