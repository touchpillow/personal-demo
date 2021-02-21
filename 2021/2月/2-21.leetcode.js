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
  const dp1 = new Array(l1).fill("").map(() => new Array(l2).fill(0));
  const dp2 = new Array(l1).fill("").map(() => new Array(l2).fill(0));
  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < l2; j++) {
      dp1[i][j] = nums[i] * multipliers[j];
      dp2[i][j] = nums[i] * multipliers[j];
    }
  }
  for (let i = l1 - 2; i >= 0; i--) {
    for (let j = i + 1; j < l1; j++) {
      dp2[j][0] = Math.max(dp2[j - 1][1] + dp1[j][0], dp2[j][1] + dp1[i][0]);
      console.log(dp2);
    }
  }
  return Math.max(...dp2[1]);
};
const nums = [-5, -3, -3, -2, 7, 1],
  multipliers = [-10, -5, 3, 4, 6];
console.log(maximumScore(nums, multipliers));
