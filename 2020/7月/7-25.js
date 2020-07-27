// var findMode = function (root) {
//   const map = new Map();
//   if (!root) return [0];
//   const stack = [root];
//   let max = 0;
//   const res = [];
//   while (stack.length) {
//     const item = stack.pop();
//     const count = (map.get(item.val) || 0) + 1;
//     max = max >= count ? max : count;
//     map.set(item.val, count);
//     if (item.left) {
//       stack.push(item.left);
//     }
//     if (item.right) {
//       stack.push(item.right);
//     }
//   }
//   for (const item of map.keys()) {
//     if (map.get(item) === max) {
//       res.push(item);
//     }
//   }
//   return res;
// };
// res /= 7;

// var convertToBase7 = function (num) {
//   if (!num) return "0";
//   let i = 0,
//     res = 1;
//   let s = "";
//   if (num < 0) {
//     num *= -1;
//     s = "-";
//   }
//   while (res <= num) {
//     res *= 7;
//     i++;
//   }
//   res /= 7;
//   while (i) {
//     const v = ~~(num / res);
//     s += v;
//     num -= v * res;
//     i--;
//     res /= 7;
//   }
//   return s;
// };
// console.log(convertToBase7(45));
// var minPathSum = function (grid) {
//   const h = grid.length;
//   if (!h) return 0;
//   const w = grid[0].length;
//   for (let i = 1; i < w; i++) {
//     grid[0][i] = grid[0][i] + grid[0][i - 1];
//   }
//   for (let i = 1; i < h; i++) {
//     grid[i][0] = grid[i][0] + grid[i - 1][0];
//   }
//   for (let i = 1; i < h; i++) {
//     for (let j = 1; j < w; j++) {
//       grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
//     }
//   }
//   console.log(grid);
//   return grid[h - 1][w - 1];
// };
// var a = [
//   [0, 2, 2, 6, 4, 1, 6, 2, 9, 9, 5, 8, 4, 4],
//   [0, 3, 6, 4, 5, 5, 9, 7, 8, 3, 9, 9, 5, 4],
//   [6, 9, 0, 7, 2, 2, 5, 6, 3, 1, 0, 4, 2, 5],
//   [3, 8, 2, 3, 2, 8, 8, 7, 5, 9, 6, 3, 4, 5],
//   [4, 0, 1, 3, 9, 2, 0, 1, 6, 7, 9, 2, 8, 9],
//   [6, 2, 7, 9, 0, 9, 5, 2, 7, 5, 1, 4, 4, 7],
//   [9, 8, 3, 3, 0, 6, 8, 0, 8, 8, 3, 5, 7, 3],
//   [7, 7, 4, 5, 9, 1, 5, 0, 2, 2, 2, 1, 7, 4],
//   [5, 1, 3, 4, 1, 6, 0, 4, 3, 8, 4, 3, 9, 9],
//   [0, 6, 4, 9, 4, 1, 5, 5, 4, 2, 5, 7, 4, 0],
//   [0, 1, 6, 6, 4, 9, 2, 7, 8, 2, 1, 3, 3, 7],
//   [8, 4, 9, 9, 2, 3, 8, 6, 6, 5, 4, 1, 7, 9],
// ];
// var minPathSum = function (grid) {
//   const h = grid.length;
//   if (!h) return 0;
//   const w = grid[0].length;
//   const res = new Array(w);
//   res[0] = grid[0][0];
//   for (let i = 1; i < w; i++) {
//     res[i] = res[i - 1] + grid[0][i];
//   }
//   console.log(res);
//   for (let i = 1; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       res[j] = Math.min(res[j], res[j - 1] || Infinity) + grid[i][j];
//     }
//     console.log(res);
//   }
//   return res[w - 1];
// };
// minPathSum(a);
// var simplifyPath = function (path) {
//   if (!path.length) return "/";
//   const stack = [];
//   const l = path.length;
//   let start = 0,
//     end = 1;
//   while (end <= l) {
//       if(path[end]==='/')
//   }
// };
// var countOdds = function (low, high) {
//   const dis = high - low;
//   if (dis % 2) {
//     return (dis + 1) / 2;
//   } else {
//     return dis / 2 + 1 - ((high + 1) % 2 ? 1 : 0);
//   }
// };
// console.log(countOdds(8, 10));
// var numOfSubarrays = function (arr) {};
// var numSplits = function (s) {
//   const l = s.length;
//   if (!l) return 1;
//   let res = 0;
//   const map1 = new Map();
//   const map2 = new Map();
//   for (let i = 0; i < l; i++) {
//     map2.set(s[i], (map2.get(s[i]) || 0) + 1);
//   }
//   for (let i = 0; i < l - 1; i++) {
//     map1.set(s[i], (map1.get(s[i]) || 0) + 1);
//     if (map2.get(s[i]) == 1) {
//       map2.delete(s[i]);
//     } else {
//       map2.set(s[i], map2.get(s[i]) - 1);
//     }
//     if (map1.size === map2.size) {
//       console.log(i);
//       res++;
//     }
//   }
//   return res;
// };
// console.log(numSplits("aacaba"));
// var numOfSubarrays = function (arr) {
//   arr.unshift(0);
//   const l = arr.length;
//   for (let i = 1; i < l; i++) {
//     arr[i] = arr[i - 1] + arr[i];
//   }
//   let res = 0;
//   let tem = 0;
//   for (let i = 1; i < l; i++) {
//     if ((arr[i] - arr[i - 1]) % 2) {
//       temp = i - temp;
//     }

//     res += temp;
//   }
//   return res % (Math.pow(10, 9) + 7);
// };
// var a = [1, 3, 5];
// console.log(numOfSubarrays(a));
var minNumberOperations = function (target) {};
var a = [1, 1, 1, 1];
console.log(minNumberOperations(a));
