// var minSubsequence = function (nums) {
//   const l = nums.length;
//   if (!l < 2) return nums;
//   const sum = nums.reduce((a, b) => a + b);
//   nums.sort((a, b) => a - b);
//   let n = 0;
//   const res = [];
//   while (n <= sum / 2) {
//     const item = nums.pop();
//     n += item;
//     res.push(item);
//   }
//   return res;
// };
// var stringMatching = function (words) {
//   return words.filter((item, index) => {
//     return words.some((v, i) => i !== index && v.includes(item));
//   });
// };
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  return map
    .entries()
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => item[0]);
};
