// var mergeAlternately = function (word1, word2) {
//   const l1 = word1.length;
//   const l2 = word2.length;
//   let i1 = 0,
//     i2 = 0;
//   let res = "";
//   while (i1 < l1 && i2 < l2) {
//     res += word1[i1];
//     res += word2[i2];
//     i1++;
//     i2++;
//   }
//   res += word1.slice(i1);
//   res += word2.slice(i2);
//   return res;
// };
// console.log(mergeAlternately("ab", "pqrs"));
// var minOperations = function (boxes) {
//   const l = boxes.length;
//   const dp = new Array(l).fill(0);
//   let right = 0;
//   for (let i = 0; i < l; i++) {
//     dp[0] += boxes[i] === "1" ? i : 0;
//     right += boxes[i] === "1" ? 1 : 0;
//   }
//   let left = boxes[0] === "1" ? 1 : 0;
//   right -= left;
//   for (let i = 1; i < l; i++) {
//     dp[i] = dp[i - 1] + left - right;
//     if (boxes[i] === "1") {
//       left++;
//       right--;
//     }
//   }
//   return dp;
// };
// const boxes = "001011";
// console.log(minOperations(boxes));
var maximumScore = function (nums, multipliers) {
  const l1 = nums.length;
  const l2 = multipliers.length;
  const dp = new Array(l2 + 1).fill("").map(() => new Array(l2 + 1).fill(0));

  for (let i = 1; i <= l2; i++) {
    dp[i][0] = dp[i - 1][0] + nums[i - 1] * multipliers[i - 1];
    dp[0][i] = dp[0][i - 1] + nums[l1 - i] * multipliers[i - 1];
  }
  for (let i = 1; i < l2; i++) {
    for (let j = 1; i + j <= l2; j++) {
      dp[i][j] = Math.max(
        dp[i][j - 1] + nums[l1 - j] * multipliers[i + j - 1],
        dp[i - 1][j] + nums[i - 1] * multipliers[i + j - 1]
      );
    }
  }
  let max = 0;
  for (let i = 1; i < l2; i++) {
    for (let j = 1; i + j <= l2; j++) {
      max = Math.max(dp[i][j], max);
    }
  }
  return max;
};
const nums = [-5, -3, -3, -2, 7, 1],
  multipliers = [-10, -5, 3, 4, 6];
console.log(maximumScore(nums, multipliers));
