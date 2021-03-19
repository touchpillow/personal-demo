// var mincostTickets = function (days, costs) {
//   const dp = new Array(days[days.length - 1] + 1).fill(0);
//   let pre = 0;
//   for (const d of days) {
//     for (let i = pre + 1; i < d; i++) {
//       dp[i] = dp[i - 1];
//     }
//     dp[d] = Math.min(
//       (dp[d - 1] || 0) + costs[0],
//       (dp[d - 7] || 0) + costs[1],
//       (dp[d - 30] || 0) + costs[2]
//     );
//     pre = d;
//   }
//   return dp[pre];
// };
// const days = [1, 4, 6, 7, 8, 20],
//   costs = [2, 7, 15];
// console.log(mincostTickets(days, costs));
// var strWithout3a3b = function (a, b) {
//   let long = a >= b ? a : b;
//   const longS = a >= b ? "a" : "b";
//   let short = a >= b ? b : a;
//   const shortS = a >= b ? "b" : "a";
//   let res = "";
//   while (long && short) {
//     const c = Math.min(2, Math.ceil(long / short));
//     long -= c;
//     short -= 1;
//     res += `${longS}`.repeat(c) + shortS;
//   }
//   res += `${longS}`.repeat(long) + `${shortS}`.repeat(short);
//   return res;
// };
// console.log(strWithout3a3b(5, 5));
// var maxAreaOfIsland = function (grid) {
//   const h = grid.length;
//   const w = grid[0].length;
//   let max = 0;
//   const dfs = (i, j) => {
//     if (i < 0 || i >= h) return 0;
//     if (j < 0 || j >= w) return 0;
//     if (!grid[i][j]) return 0;
//     grid[i][j] = 0;
//     return 1 + dfs(i, j + 1) + dfs(i, j - 1) + dfs(i - 1, j) + dfs(i + 1, j);
//   };
//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       if (!grid[i][j]) continue;
//       max = Math.max(dfs(i, j), max);
//     }
//   }
//   return max;
// };
// var findLengthOfLCIS = function (nums) {
//   let max = 0;
//   let len = 1;
//   const l = nums.length;
//   if (!l) return 0;
//   for (let i = 1; i < l; i++) {
//     if (nums[i] > nums[i - 1]) {
//       len++;
//     } else {
//       max = Math.max(len, max);
//       len = 1;
//     }
//   }
//   return Math.max(len, max);
// };
// const a = [3, 2, 3, 1, 2, 4, 5, 5, 6],
//   b = 4;
// var findKthLargest = function (nums, k) {
//   const stack = [];
//   while (nums.length) {
//     const item = nums.shift();
//     if (stack.length >= k) {
//       if (item > stack[0]) {
//         stack.shift();
//       } else {
//         continue;
//       }
//     }
//     const index = stack.findIndex((n) => n >= item);
//     if (index < 0) {
//       stack.push(item);
//     } else {
//       stack.splice(index, 0, item);
//     }
//   }
//   return stack[0];
// };
// console.log(findKthLargest(a, b));
// function isObject(a) {
//   return typeof a == "object" && a != null;
// }
// function deepClone4(data) {
//   const stack = [];
//   const res = {};
//   stack.push({
//     key: undefined,
//     data,
//     parent: res,
//   });
//   const dataList = new Map();
//   if (!isObject(data)) return data;
//   while (stack.length) {
//     const item = stack.pop();
//     const currData = item.data;
//     let temp;
//     if (!item.key) {
//       temp = item.parent;
//     } else {
//       temp = item.parent[item.key] = {};
//     }
//     debugger;
//     if (dataList.get(currData)) {
//       temp[item.key] = dataList.get(currData);
//       continue;
//     }
//     dataList.set(currData, currData);

//     for (const key in currData) {
//       if (isObject(currData[key])) {
//         if (currData.hasOwnProperty(key)) {
//           stack.push({
//             key,
//             data: currData[key],
//             parent: temp,
//           });
//         }
//       } else {
//         console.log(currData[key]);
//         temp[key] = currData[key];
//       }
//     }
//   }

//   return res;
// }
// console.log(deepClone4(1));
// var longestConsecutive = function (nums) {
//   nums = [...new Set(nums)].sort((a, b) => a - b);
//   let max = 0;
//   let cur = 1;
//   const l = nums.length;
//   for (let i = 1; i < l; i++) {
//     if (nums[i] - nums[i - 1] === 1) {
//       cur++;
//     } else {
//       max = Math.max(cur, max);
//       cur = 1;
//     }
//   }
//   return Math.max(cur, max);
// };
// var GetImportance = function (employees, id) {
//   var map = new Map(),
//     sum = 0;
//   const dfs = (id) => {
//     const cur = map.get(id);
//     if (!cur) return;
//     sum += cur[0];
//     const ids = cur[1];
//     for (var i = 0; i < ids.length; i++) {
//       dfs(ids[i]);
//     }
//   };
//   for (var i = 0; i < employees.length; i++) {
//     const e = employees[i];
//     map.set(e.id, [e.importance, e.subordinates]);
//   }
//   dfs(id);
//   return sum;
// };
var GetImportance = function (employees, id) {
  var map = new Map();
  for (const item of employees) {
    map.set(item.id, item);
  }
  const dfs = (id) => {
    if (!map.has(id)) return 0;
    return (
      map.get(id).importance +
      map.get(id).subordinates.reduce((pre, id) => {
        return pre + dfs(id);
      }, 0)
    );
  };
  return dfs(id);
};
