// var longestCommonSubsequence = function (text1, text2) {
//   const l1 = text1.length;
//   const l2 = text2.length;
//   const dp = new Array(l1 + 1).fill(0).map(() => new Array(l2 + 1).fill(0));
//   for (let i = 1; i <= l1; i++) {
//     for (let j = 1; j <= l2; j++) {
//       if (text1[i - 1] === text2[j - 1]) {
//         dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i][j]);
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//       }
//     }
//   }

//   return dp[l1][l2];
// };
const a = "bl",
  b = "yby";
console.log(longestCommonSubsequence(a, b));
var longestCommonSubsequence = function (text1, text2) {
  const l1 = text1.length;
  const l2 = text2.length;
  const dp1 = new Array(l2 + 1).fill(0);
  const dp2 = new Array(l2 + 1).fill(0);
  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp2[j] = dp1[j - 1] + 1;
      } else {
        dp2[j] = Math.max(dp1[j], dp2[j - 1]);
      }
    }
    for (let j = 1; j <= l2; j++) {
      dp1[j] = dp2[j];
      dp2[j] = 0;
    }
  }

  return dp1[l2];
};
