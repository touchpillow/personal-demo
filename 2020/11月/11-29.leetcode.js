// var maximumWealth = function (accounts) {
//   const vList = accounts.map((item) => {
//     return item.reduce((a, b) => a + b);
//   });
//   return Math.max(...vList);
// };
// var mostCompetitive = function (nums, k) {
//   const stack = [];
//   const l = nums.length;
//   k = l - k;
//   for (let i = 0; i < l; i++) {
//     if (!stack.length) {
//       stack.push(nums[i]);
//       continue;
//     }
//     while (stack.length && k && stack[stack.length - 1] > nums[i]) {
//       stack.pop();
//       k--;
//     }
//     stack.push(nums[i]);
//   }
//   while (k--) {
//     stack.pop();
//   }
//   return stack;
// };
// const nums = [2, 4, 3, 3, 5, 4, 9, 6],
//   k = 4;
// console.log(mostCompetitive(nums, k));
var minMoves = function (nums, limit) {
  const l = nums.length;
  const dp = new Array(2 * limit + 2).fill(0);
  for (let i = 0; i < l / 2; i++) {
    const sum = nums[i] + nums[l - 1 - i];
    const max = Math.max(nums[i], nums[l - 1 - i]);
    const min = Math.min(nums[i], nums[l - 1 - i]);
    dp[1 + min]--;
    dp[sum]--;
    dp[sum + 1]++;
    dp[max + limit + 1]++;
  }
  let res = l;
  let max = l;
  for (let i = 2; i <= 2 * limit; i++) {
    max += dp[i];
    res = Math.min(max, res);
  }
  return res;
};

const nums = [1, 2, 2, 1],
  limit = 2;
console.log(minMoves(nums, limit));
