// var flipLights = function (n, m) {
//   n = Math.min(n, 3);
//   if (m == 0) return 1;
//   if (m == 1) return n == 1 ? 2 : n == 2 ? 3 : 4;
//   if (m == 2) return n == 1 ? 2 : n == 2 ? 4 : 7;
//   return n == 1 ? 2 : n == 2 ? 4 : 8;
// };
var findNumberOfLIS = function (nums) {
  const l = nums.length;
  const dp = new Array(l).fill("").map(() => [1, 1]);
  for (let i = 1; i < l; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        if (dp[j][0] + 1 === dp[i][0]) {
          dp[i][1] += dp[j][1];
        } else if (dp[j][0] + 1 > dp[i][0]) {
          dp[i][0] = dp[j][0] + 1;
          dp[i][1] = dp[j][1];
        }
      }
    }
  }
  let c = 0;
  let max = 0;
  console.log(dp);
  for (const [length, n] of dp) {
    if (length > max) {
      c = n;
      max = length;
    } else if (length === max) {
      c += n;
    }
  }
  return c;
};
const nums = [1, 2, 4, 3, 5, 4, 7, 2];
console.log(findNumberOfLIS(nums));
