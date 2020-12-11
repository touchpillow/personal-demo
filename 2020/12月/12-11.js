// var magicalString = function (n) {
//   if (!n) return 0;
//   let s = "1";
//   let c = 1;
//   let cur = "2";
//   let i = 1;
//   while (s.length < n) {
//     s += cur.repeat(Number(s[i]) || 2);
//     if (cur === "1") {
//       c += Number(s[i]);
//     }
//     cur = cur == "1" ? "2" : "1";
//     i++;
//   }
//   if (s.length > n && s[n - 1] == "1") c--;
//   return c;
// };
// console.log(magicalString(12));
var PredictTheWinner = function (nums) {
  const l = nums.length;
  if (!(l % 2)) return true;
  if (l < 2) return true;
  const dp = nums.slice(0);

  for (let i = l - 2; i >= 0; i--) {
    for (let j = i + 1; j < l; j++) {
      dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
    }
  }
  return dp[l - 1] >= 0;
};
var PredictTheWinner = function (nums) {
  const l = nums.length;
  if (l < 2) return true;
  const dp = new Array(l).fill("").map(() => new Array(l).fill(0));
  for (let i = 0; i < l; i++) {
    dp[i][i] = nums[i];
  }
  for (let i = l - 2; i >= 0; i--) {
    for (let j = i + 1; j < l; j++) {
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    }
  }
  return dp[0][l - 1] >= 0;
};
