// var nextPermutation = function (nums) {
//   const l = nums.length;
//   for (let i = l - 2; i >= 0; i--) {
//     if (nums[i] < nums[i + 1]) {
//       for (let j = l - 1; j > i; j--) {
//         if (nums[j] > nums[i]) {
//           [nums[i], nums[j]] = [nums[j], nums[i]];
//           for (let k = i + 1; k < (i + l) / 2; k++) {
//             [nums[k], nums[l + i - k]] = [nums[l + i - k], nums[k]];
//           }
//           return nums;
//         }
//       }
//       break;
//     }
//   }
//   return nums.sort((a, b) => a - b);
// };
// console.log(nextPermutation([1, 3, 2]));

//排列组合
// var permute = function (nums) {
//   const res = [];
//   const dfs = (next, pre = []) => {
//     const l = next.length;
//     if (!l) {
//       res.push(pre);
//     }
//     for (let i = 0; i < l; i++) {
//       dfs(next.slice(0, i).concat(next.slice(i + 1)), pre.concat(next[i]));
//     }
//   };
//   dfs(nums);
//   return res;
// };

// //排列组合优化
// var permute = function (nums) {
//   const res = [];
//   const cur = [];
//   const dfs = (next) => {
//     const l = next.length;
//     if (!l) {
//       res.push(cur.slice());
//     }
//     for (let i = 0; i < l; i++) {
//       cur.push(next[i]);
//       dfs(next.slice(0, i).concat(next.slice(i + 1)));
//       cur.pop();
//     }
//   };
//   dfs(nums);
//   return res;
// };

// //排列组合 + 尾递归
// var permute = function (nums, pre = [], res = []) {
//   if (!nums.length) {
//     res.push(pre);
//     return res;
//   }
//   return nums.reduce((res, item, index) => {
//     return permute(
//       nums.slice(0, index).concat(nums.slice(index + 1)),
//       pre.concat(item),
//       res
//     );
//   }, res);
// };

//动态规划
//时间复杂度 O(n2) 空间复杂度O(n2)
var minPathSum = function (grid) {
  const h = grid.length;
  const w = grid[0].length;
  const dp = new Array(h + 1)
    .fill("")
    .map(() => new Array(w + 1).fill(Infinity));
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      if (i === 1 && j === 1) {
        dp[i][j] = grid[0][0];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
      }
    }
  }
  return dp[h][w];
};

//动态规划 + 状态压缩
//时间复杂度 O(n2) 空间复杂度O(n)
var minPathSum = function (grid) {
  const h = grid.length;
  const w = grid[0].length;
  const dp1 = grid[0].slice();
  for (let i = 1; i < w; i++) {
    dp1[i] = dp1[i] + dp1[i - 1];
  }
  const dp2 = dp1.slice();
  for (let i = 1; i < h; i++) {
    dp2[0] = dp2[0] + grid[i][0];

    for (let j = 1; j < w; j++) {
      dp2[j] = Math.min(dp1[j], dp2[j - 1]) + grid[i][j];
      dp1[j] = dp2[j];
    }
  }
  return dp2[w - 1];
};

//动态规划 + 原地算法
//时间复杂度 O(n2) 空间复杂度O(1)
var minPathSum = function (grid) {
  const h = grid.length;
  const w = grid[0].length;
  for (let i = 1; i < w; i++) {
    grid[0][i] = grid[0][i] + grid[0][i - 1];
  }
  for (let i = 1; i < h; i++) {
    grid[i][0] = grid[i - 1][0] + grid[i][0];
    for (let j = 1; j < w; j++) {
      grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j];
    }
  }
  return grid[h - 1][w - 1];
};
