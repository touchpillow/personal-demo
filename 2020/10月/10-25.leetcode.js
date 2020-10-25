// var slowestKey = function (releaseTimes, keysPressed) {
//   const l = releaseTimes.length;
//   const res = new Array(l);
//   res[0] = releaseTimes[0];
//   for (let i = 1; i < l; i++) {
//     res[i] = releaseTimes[i] - releaseTimes[i - 1];
//   }
//   const max = Math.max(...res);
//   let s = "";
//   for (let i = 0; i < l; i++) {
//     if (res[i] == max && keysPressed[i] > s) {
//       s = keysPressed[i];
//     }
//   }
//   return s;
// };
// const releaseTimes = [12, 23, 36, 46, 62],
//   keysPressed = "spuda";
// console.log(slowestKey(releaseTimes, keysPressed));
// const help = (nums) => {
//   const l = nums.length;
//   if (l < 3) return true;
//   nums.sort((a, b) => a - b);
//   const d = nums[1] - nums[0];
//   for (let i = 2; i < l; i++) {
//     if (nums[i] - nums[i - 1] !== d) return false;
//   }
//   return true;
// };
// var checkArithmeticSubarrays = function (nums, l, r) {
//   return l.map((item, index) => {
//     return help(nums.slice(item, r[index] + 1));
//   });
// };
// const nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
//   l = [0, 1, 6, 4, 8, 7],
//   r = [4, 4, 9, 7, 9, 10];
// console.log(checkArithmeticSubarrays(nums, l, r));
var minimumEffortPath = function (heights) {
  const h = heights.length;
  const w = heights[0].length;
  let res = 0;
  if (h == 1 && w == 1) return res;
  for (let i = 1; i < w; i++) {
    res = Math.max(Math.abs(heights[0][i] - heights[0][i - 1]), res);
  }
  for (let i = 1; i < h; i++) {
    res = Math.max(Math.abs(heights[i][w - 1] - heights[i - 1][w - 1]), res);
  }
  const dfs = (i, j, v, temp) => {
    if (i < 0 || i >= h) return;
    if (j < 0 || j >= w) return;
    if (heights[i][j] === "#") return;
    v = Math.max(v, Math.abs(heights[i][j] - temp));
    if (i == 0 && j == 0) {
      res = Math.min(res, v);
      return;
    }
    if (v >= res) return;
    temp = heights[i][j];
    heights[i][j] = "#";
    dfs(i + 1, j, v, temp);
    dfs(i - 1, j, v, temp);
    dfs(i, j + 1, v, temp);
    dfs(i, j - 1, v, temp);
    heights[i][j] = temp;
  };
  dfs(h - 1, w - 1, 0, heights[h - 1][w - 1]);
  return res;
};
const heights = [
  [1, 2, 1, 1, 1],
  [1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1],
  [1, 1, 1, 2, 1],
];
console.log(minimumEffortPath(heights));
