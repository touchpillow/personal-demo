// var minMoves = function (nums) {
//   const l = nums.length;
//   if (!l) return 0;
//   let res = 0;
//   let min = nums[0];
//   for (let i = 1; i < l; i++) {
//     res += nums[i] - nums[0];
//     min = min < nums[i] ? min : nums[i];
//   }
//   return res + (nums[0] - min) * (l - 1);
// };
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let l1 = g.length;
  let l1 = s.length;
  let res = 0;
  while (i < l1 && j < l2) {
    if (g[i] <= s[j]) {
      res++;
    }
    j++;
  }
  return res;
};
