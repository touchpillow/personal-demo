// var minOperations = function (nums) {
//   let c = 0;
//   const l = nums.length;
//   for (let i = 1; i < l; i++) {
//     if (nums[i] <= nums[i - 1]) {
//       c += nums[i - 1] + 1 - nums[i];
//       nums[i] = nums[i - 1] + 1;
//     }
//   }
//   return c;
// };

// var countPoints = function (points, queries) {
//   return queries.map((item) => {
//     const [x, y, r] = item;
//     return points.filter((p) => {
//       const [x1, y1] = p;
//       return Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2) <= Math.pow(r, 2);
//     }).length;
//   });
// };
var getMaximumXor = function (nums, maximumBit) {
  let pre = nums.reduce((res, item) => res ^ item, 0);
  const res = [];
  while (nums.length) {
    const str = pre.toString(2);
    const target = Number.parseInt("1".repeat(maximumBit), 2);
    const l = str.length;
    if (l > maximumBit) {
      const cur = Number.parseInt(str.slice(l - maximumBit), 2);
      res.push(target ^ cur);
    } else {
      res.push(target ^ pre);
    }
    pre = pre ^ nums[nums.length - 1];
    nums.pop();
  }
  return res;
};
const nums = [2, 3, 4, 7],
  maximumBit = 3;
console.log(getMaximumXor(nums, maximumBit));
