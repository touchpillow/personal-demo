// var numFriendRequests = function (ages) {
//   const agesDp = new Array(121).fill(0);
//   for (const age of ages) {
//     agesDp[age]++;
//   }
//   const l = ages.length;
//   const dp = new Array(l).fill(0);
//   for (let i = 0; i < l; i++) {
//     const min = Math.ceil(0.5 * (ages[i] - 1) + 8);
//     for (let j = min; j <= ages[i]; j++) {
//       dp[i] += agesDp[j];
//     }
//     dp[i] = Math.max(0, dp[i] - 1);
//   }
//   return dp.reduce((a, b) => a + b, 0);
// };
// const ages = [16, 16];
// console.log(numFriendRequests(ages));
var maxProfitAssignment = function (difficulty, profit, worker) {
  const l = difficulty.length;
  const map = new Map();

  for (let i = 0; i < l; i++) {
    map.set(difficulty[i], Math.max(map.get(difficulty[i]) || 0, profit[i]));
  }
  const max = Math.max(...difficulty, ...worker);
  const dp = new Array(max + 1).fill(0);
  for (let i = 1; i <= max; i++) {
    dp[i] = Math.max(dp[i - 1], map.get(i) || 0);
  }
  return worker.reduce((sum, item) => sum + dp[item], 0);
};

const difficulty = [13, 37, 58],
  profit = [4, 90, 96],
  worker = [34, 73, 45];
console.log(maxProfitAssignment(difficulty, profit, worker));
