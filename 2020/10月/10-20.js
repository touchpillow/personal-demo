// var findTheDistanceValue = function (arr1, arr2, d) {
//   return arr1.filter((item) => {
//     return arr2.every((i) => Math.abs(i - item) > d);
//   }).length;
// // };
// var createTargetArray = function (nums, index) {
//   const res = [];
//   const l = index.length;
//   for (let i = 0; i < l; i++) {
//     if (!i) {
//       res.push(nums[i]);
//     } else {
//       res.splice(index[i], 0, nums[i]);
//     }
//   }
//   return res;
// };
var countBits = function (num) {
  const res = new Array(num + 1);
  res[0] = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2) {
      res[i] = res[i - 1];
    } else {
      res[i] = (res[i >> 1] + i) & 1;
    }
  }
  return res;
};
