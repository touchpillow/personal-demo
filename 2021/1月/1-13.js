// var maxAreaOfIsland = function (grid) {
//   const h = grid.length;
//   const w = grid[0].length;
//   let max = 0;
//   const dfs = (i, j) => {
//     if (i < 0 || i >= h) return 0;
//     if (j < 0 || j >= w) return 0;
//     if (grid[i][j] === 0) return 0;
//     grid[i][j] = 0;
//     return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
//   };
//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       if (grid[i][j] === 0) continue;
//       max = Math.max(max, dfs(i, j));
//     }
//   }
//   return max;
// };
// var canPartitionKSubsets = function (nums, k) {
//   nums = nums.sort((a, b) => b - a);
//   let sum = nums.reduce((a, b) => a + b, 0);

//   // 临界条件
//   if (k > nums.length || sum % k !== 0) return false;
//   if (k === nums.length) return new Set(nums).size === 1;

//   let average = sum / k;

//   let sums = new Array(k).fill(0);

//   return helper(0);

//   function helper(i) {
//     if (i === nums.length) return true;
//     for (let j = 0; j < k; j++) {
//       if (sums[j] < average && nums[i] + sums[j] <= average) {
//         sums[j] += nums[i];
//         if (helper(i + 1)) {
//           return true;
//         }
//         sums[j] -= nums[i];
//       }
//     }

//     return false;
//   }
// };
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  /**
   * @param {number} target 划分的子集和
   * @param {number} k      划分的子集个数
   * @param {number} start  搜索nums数组的起始位置
   * @return {boolean}
   */
  function dfs(target, k, start) {
    // 找到满足的子集个数时候返回 true
    if (k == 0) return true;
    // 从start开始搜索nums数组
    for (let i = start; i < nums.length; i++) {
      // 剪枝：访问过的和相同元素
      if (visited[i] == 1) continue;
      if (i > 0 && nums[i] == nums[i - 1] && visited[i - 1] == 0) continue;
      // 标记为已搜索
      visited[i] = 1;
      // 找到一个子集 并 向下搜索
      if (target - nums[i] == 0 && dfs(divide, k - 1, 0)) return true;
      // 减少搜索的值，并向下搜索，start = i + 1
      // 因为nums数组是排序过的，所以确保前面的值已经搜索过不需要重复搜索
      else if (target - nums[i] >= nums[i] && dfs(target - nums[i], k, i + 1))
        return true;
      // 退出搜索
      visited[i] = 0;
    }
    return false;
  }
  // visited标记那些元素已经搜索过
  let visited = new Array(nums.length).fill(0),
    sum = nums.reduce((_, val) => _ + val, 0),
    divide = (nums.reduce((_, val) => _ + val, 0) / k) | 0;
  // 判断是否可以分成相等的 k 个子集必要条件
  if (sum % k != 0 || Math.max(...nums) > divide) return false;
  // 排序给剪枝做准备
  nums.sort((a, b) => a - b);
  // 只要能组合出 k - 1个子集即可
  return dfs(divide, k - 1, 0);
};
