// var getLeastNumbers = function (arr, k) {
//   const res = [];
//   for (const item of arr) {
//     const l = res.length;
//     if (!l) {
//       res.push(item);
//       continue;
//     }
//     let i = 0;
//     for (; i < l; i++) {
//       if (res[i] > item) break;
//     }
//     res.splice(i, 0, item);
//   }
//   return res.slice(0, k);
// };
// var maxSubArray = function (nums) {
//   let sum = nums[0];
//   let pre = nums[0];
//   const l = nums.length;
//   for (let i = 1; i < l; i++) {
//     pre = Math.max(nums[i], pre + nums[i]);
//     sum = Math.max(pre, sum);
//   }
//   return sum;
// };
var firstUniqChar = function (s) {
  if (!s) return " ";
  const map = {};
  const res = [];
  for (const item of s) {
    if (map[item] !== undefined) {
      map[item] = false;
    } else {
      map[item] = true;
    }
    res.push(item);
  }
  return res.find((item) => map[item] === undefined) || " ";
};
