// var nextGreatestLetter = function (letters, target) {
//   for (const s of letters) {
//     if (s > target) return s;
//   }
//   return letters[0];
// };
// var minCostClimbingStairs = function (cost) {
//   const l = cost.length;
//   let v1 = cost[0];
//   let v2 = cost[1];
//   let i = 2;
//   while (i < l) {
//     const curv = cost[i] + Math.min(v1, v2);
//     v1 = v2;
//     v2 = curv;
//     i++;
//   }
//   return Math.min(v1, v2);
// };
// var a = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
// var a = [0, 0, 0, 1];
// console.log(minCostClimbingStairs(a));
// var singleNumber = function (nums) {
//   const map = new Map();
//   for (const i of nums) {
//     map.set(i, (map.get(i) || 0) + 1);
//   }
//   for (const v of map.keys()) {
//     if (map.get(v) == 1) return v;
//   }
// };
var dominantIndex = function (nums) {
  const l = nums.length;
  if (l < 2) return true;
  let max = 0;
  let max2 = -1;
  for (let i = 1; i < l; i++) {
    if (nums[i] >= nums[max]) {
      max2 = max;
      max = i;
    } else if (nums[i] >= (nums[max2] || -1)) {
      max2 = i;
    }
  }
  return nums[max] >= 2 * nums[max2] ? max : -1;
};
var a = [0, 0, 0, 1];
console.log(dominantIndex(a));
