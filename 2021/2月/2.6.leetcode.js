// var sumOfUnique = function (nums) {
//   const map = new Map();
//   for (const n of nums) {
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   let c = 0;
//   for (const [key, v] of map.entries()) {
//     if (v === 1) {
//       c += key;
//     }
//   }
//   return c;
// };
// var maxAbsoluteSum = function (nums) {
//   const l = nums.length;
//   const dp1 = new Array(l).fill(0);
//   const dp2 = new Array(l).fill(0);
//   if (nums[0] > 0) {
//     dp1[0] = nums[0];
//   } else {
//     dp2[0] = nums[0];
//   }
//   for (let i = 1; i < l; i++) {
//     if (nums[i] > 0) {
//       dp1[i] = dp1[i - 1] + nums[i];
//       dp2[i] = Math.min(0, dp2[i - 1] + nums[i]);
//     } else {
//       dp1[i] = Math.max(0, dp1[i - 1] + nums[i]);
//       dp2[i] = dp2[i - 1] + nums[i];
//     }
//   }
//   return Math.max(...dp1, ...dp2.map((item) => Math.abs(item)));
// };
// const nums = [2, -5, 1, -4, 3, -2];
// console.log(maxAbsoluteSum(nums));
// var minimumLength = function (s) {
//   const l = s.length;
//   let left = 0,
//     right = l - 1;
//   while (right > left) {
//     if (s[left] !== s[right]) return right - left + 1;
//     while (left < right && s[left] === s[left + 1]) {
//       left++;
//     }
//     while (right > left && s[right] === s[right - 1]) {
//       right--;
//     }
//     left++;
//     right--;
//   }
//   return Math.max(0, right - left + 1);
// };
// const s = "aabccabba";
// console.log(minimumLength(s));
var maxValue = function (events, k) {
  const l = events.length;
  events.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  });
  const dp = new Array(k + 1).fill("").map(() => new Array(l).fill(0));
  dp[1][0] = events[0][2];
  for (let i = 1; i < l; i++) {
    dp[1][i] = Math.max(dp[1][i - 1], events[i][2]);
  }
  for (let i = 0; i <= k; i++) {
    dp[i][0] = events[0][2];
  }
  for (let i = 2; i <= k; i++) {
    for (let j = 1; j < l; j++) {
      dp[i][j] = dp[i - 1][j];
      let index = -1;
      for (let m = 0; m < j; m++) {
        if (events[m][1] >= events[j][0]) break;
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][m] + events[j][2]);
      }
    }
  }

  return Math.max(...dp.map((item) => Math.max(...item)));
};
const events = [
    [41, 54, 68],
    [28, 84, 88],
    [35, 44, 51],
    [10, 64, 36],
    [81, 86, 25],
    [6, 51, 80],
    [17, 99, 35],
    [8, 86, 22],
    [82, 89, 60],
    [61, 73, 96],
    [50, 52, 28],
  ],
  k = 11;
console.log(maxValue(events, k));
