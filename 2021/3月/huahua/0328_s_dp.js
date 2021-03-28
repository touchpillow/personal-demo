/**
 * 1025. 除数博弈
 * @param {number} n
 * @return {boolean}
 */
// N  a1,a2,a3

// 不会 分析不出规律
var divisorGame = function (n) {
  const dp = new Array(n + 1).fill(false);
  dp[1] = false;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (!(i % j) && !dp[i - j]) {
        dp[i] = true;
      }
    }
  }
  return dp[n];
};

/**
 * 剑指 Offer 42. 连续子数组的最大和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 当前位置的连续最大和
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...dp);
};
var maxSubArray2 = function (nums) {
  // 整个数组的最大和
  let max = -Infinity,
    // 前一个位置的最大和
    pre = 0;
  for (let i = 0; i < nums.length; i++) {
    //  pre + cur 没有当前的数字大就重置pre
    pre = Math.max(pre + nums[i], nums[i]);
    max = Math.max(pre, max);
  }
  return max;
};
/**
 * 303. 区域和检索 - 数组不可变  不懂这道题再考什么
 * @param {number[]} nums
 */
// i-j
// sum[j] - sum[i-1]
var NumArray = function (nums) {
  // this.nums = nums || [];
  this.cache = new Array(nums.length).fill(0);
  this.cache[0] = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    this.cache[i] = this.cache[i - 1] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.cache[right] - (this.cache[left - 1] || 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
/**
 * 面试题 08.01. 三步问题 如何去掉前面的三个if
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  let dp = new Array(n + 1).fill(0),
    m = 1000000007;
  dp[0] = 0;
  if (n === 1) return 1 % m;
  dp[1] = 1 % m;
  if (n === 2) return 2 % m;
  dp[2] = 2 % m;
  if (n === 3) return 4 % m;
  dp[3] = 4 % m;
  for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % m;
  }
  return dp[n];
};
// 0 1 2 //3

var waysToStep2 = function (n) {
  if (n === 1) return 1;
  let dp3 = 1,
    dp2 = 1,
    dp1 = 2,
    m = 1000000007;
  for (let i = 3; i <= n; i++) {
    [dp1, dp2, dp3] = [(dp1 + dp2 + dp3) % m, dp1, dp2];
  }
  return dp1;
};

/**
 * 392. 判断子序列
 * 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // let sIndex = 0;

  // for (let i = 0; i < t.length; i++) {
  //   if (t[i] === s[sIndex]) ++sIndex;
  // }
  // return sIndex >= s.length;
  // s='bca'
  //t='aaaaacbaa'
  const l = t.length;
  const dp = new Array(l).fill("").map(() => new Array(26).fill(-1));
  const last = t[l - 1];
  dp[l - 1][t[last].chartCodeAt() - 97] = l - 1;
  for (let i = l - 2; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      dp[i][j] = dp[i + 1][j];
    }
    dp[i][t[i].chartCodeAt() - 97] = i;
  }
  let cur = 0;
  // bac
  // aaab
  const ls = s.length;
  for (let i = 0; i < ls; i++) {
    if (cur >= l) return false;
    const curentIndex = dp[cur][s[i].charCodeAt() - 97];
    if (curentIndex < 0) return false;
    cur = curentIndex + 1;
  }
  return true;
};
// 进阶？？
