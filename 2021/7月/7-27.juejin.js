// var mySqrt = function (x) {
//   if (x < 2) return x;
//   let cur = 1;
//   while (cur * cur <= x) {
//     cur++;
//   }
//   return cur - 1;
// };
// var mySqrt = function (x) {
//   return ~~Math.sqrt(x);
// };

// 动态规划，dp[i]表示以nums[i]结尾的最大子序和
// 时间复杂度O(n) 空间复杂度O(n)
// var maxSubArray = function (nums) {
//   const l = nums.length;
//   let dp = nums.slice();
//   for (let i = 1; i < l; i++) {
//     dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
//   }
//   return Math.max(...dp);
// };

// 动态规划：dp[i]仅与dp[i-1]及nums[i]有关，空间可以压缩
// 时间复杂度O(n) 空间复杂度O(1)
// var maxSubArray = function (nums) {
//   const l = nums.length;
//   let max = nums[0];
//   let cur = nums[0]; //当前以nums[i]结尾的最大子序和
//   for (let i = 1; i < l; i++) {
//     cur = cur > 0 ? cur + nums[i] : nums[i];
//     max = Math.max(max, cur);
//   }
//   return max;
// };

//动态规划：dp[i]表示爬到i阶楼梯的结果
//时间复杂度O(n) 空间复杂度O(n)
var climbStairs = function (n) {
  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

//动态规划：dp[i]仅与dp[i-2]和dp[i-1]有关，用两个变量代替
//时间复杂度O(n) 空间复杂度O(1)
var climbStairs = function (n) {
  if (n < 2) return 1;
  let a = 1,
    b = 1;
  while (n >= 2) {
    [a, b] = [b, a + b];
  }
  return b;
};

//递归+缓存。从n开始计算，记录爬到i阶楼梯的结果
//时间复杂度O(n) 空间复杂度O(n)
var climbStairs = function (n, map = new Map([1, 1], [0, 1])) {
  if (map.has(n)) return map.get(n);
  const res = climbStairs(n - 1, map) + climbStairs(n - 2, map);
  map.set(n, res);
  return res;
};
