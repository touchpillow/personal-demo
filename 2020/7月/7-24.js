// var nextGreaterElement = function (nums1, nums2) {
//   const map = new Map();
//   const l1 = nums1.length;
//   const l2 = nums2.length;
//   for (let i = 0; i < l2; i++) {
//     map.set(nums2[i], i);
//   }
//   const res = [];
//   for (const item of nums1) {
//     const start = map.get(item);
//     const flag = false;
//     for (let j = start + 1; j < l1; j++) {
//       if (nums2[j] > item) {
//         res.push(nums2[j]);
//         flag = true;
//         break;
//       }
//     }
//     if (!flag) {
//       res.push(-1);
//     }
//   }
//   return res;
// };
// var nextGreaterElement = function (nums1, nums2) {
//   const map = new Map();
//   const stack = [];
//   for (const item of nums2) {
//     if (!stack.length) {
//       stack.push(item);
//     } else {
//       while (stack.length) {
//         const top = stack.pop();
//         if (top > item) {
//           stack.push(item);
//           break;
//         } else {
//           map.set(top, item);
//         }
//       }
//     }
//   }
//   for (const i of stack) {
//     map.set(i, -1);
//   }
//   return nums1.map((i) => map.get(i));
// };
// var findWords = function (words) {
//   const s = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
//   return words.filter((i) => {
//     const index = s.find((s) => s.includes(i[0]));
//     return [...i].every((i) => s[index].includes(i));
//   });
// };
// var uniquePathsWithObstacles = function (obstacleGrid) {
//   const h = obstacleGrid.length;
//   if (!h) return 0;
//   const w = h[0].length;
//   obstacleGrid[0][0] = 1;
//   for (let i = 1; i < w; i++) {
//     obstacleGrid[0][i] = !obstacleGrid[0][i] ? obstacleGrid[0][i - 1] : 0;
//   }
//   for (let i = 1; i < h; i++) {
//     obstacleGrid[i][0] = !obstacleGrid[i][0] ? obstacleGrid[i - 1][0] : 0;
//   }
//   for (let i = 1; i < h; i++) {
//     for (let j = 1; j < w; j++) {
//       obstacleGrid[i][j] = !obstacleGrid[i][j]
//         ? obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
//         : 0;
//     }
//   }
//   return obstacleGrid[h - 1][w - 1];
// };
// var uniquePaths = function (m, n) {
//   const res = new Array(m).fill(1);
//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j < m; j++) {
//       res[m] = res[m - 1] + res[m];
//     }
//   }
//   return res[m - 1][n - 1];
// };
var uniquePathsWithObstacles = function (obstacleGrid) {
  const h = obstacleGrid.length;
  if (!h) return 0;
  if (obstacleGrid[0][0]) return 0;
  const res = obstacleGrid[0];
  const w = res.length;
  if (obstacleGrid[h - 1][w - 1]) return 0;
  for (let i = 0; i < w; i++) {
    res[i] = !res[i] ? 1 : 0;
  }
  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      res[j] = !obstacleGrid[i][j]
        ? res[j] + (!obstacleGrid[i][j - 1] ? res[j - 1] : 0)
        : 0;
    }
  }
  return res[w - 1];
};
