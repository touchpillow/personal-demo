// var NumArray = function (nums) {
//   const l = nums.length;
//   this.cache = new Array(l + 1);
//   this.cache[0] = 0;
//   for (let i = 1; i <= l; i++) {
//     this.cache[i] = this.cache[i - 1] + nums[i - 1];
//   }
//   this.nums = nums;
// };

// /**
//  * @param {number} i
//  * @param {number} val
//  * @return {void}
//  */
// NumArray.prototype.update = function (i, val) {
//   for (let j = 1; j <= i; j++) {
//     this.cache[j] = this.cache[j] - this.nums[i] + val;
//   }
//   this.nums[i] = val;
// };

// /**
//  * @param {number} i
//  * @param {number} j
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function (i, j) {
//   return this.cache[j + 1] - this.cache[i];
// };
// var minCostToMoveChips = function (position) {
//   let e = 0,
//     o = 0;
//   for (const i of position) {
//     if (i % 2) {
//       o++;
//     } else {
//       e++;
//     }
//   }
//   return Math.min(e, o);
// };
var balancedStringSplit = function (s) {
  let vr = 0;
  let vl = 0;
  let c = 0;
  for (const i of s) {
    if (i == "L") {
      vl++;
    } else {
      vr++;
    }
    if (vr && vr == vl) {
      c++;
      vr = 0;
      vl = 0;
    }
  }
  return c;
};
