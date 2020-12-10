// var totalHammingDistance = function (nums) {
//   const l = nums.length;
//   const v0 = new Array(32).fill(0);
//   const v1 = new Array(32).fill(0);
//   for (let i = 0; i < l; i++) {
//     const v = nums[i].toString(2).padStart(32, "0");
//     for (let i = 0; i < 32; i++) {
//       if (v[i] == "1") {
//         v1[i]++;
//       } else {
//         v0[i]++;
//       }
//     }
//   }
//   let res = 0;
//   for (let i = 0; i < 32; i++) {
//     res += v0[i] * v1[i];
//   }
//   return res;
// };
var Solution = function (radius, x_center, y_center) {
  this.center = [x_center, y_center];
  this.radius = radius;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
  const xLeft = this.center[0] - this.radius;
  const yBottom = this.center[1] - this.radius;
  let x = xLeft + Math.random() * 2 * this.radius;
  let y = yBottom + Math.random() * 2 * this.radius;
  while (
    (x - this.center[0]) * (x - this.center[0]) +
      (y - this.center[1]) * (y - this.center[1]) >
    this.radius * this.radius
  ) {
    x = xLeft + Math.random() * 2 * this.radius;
    y = yBottom + Math.random() * 2 * this.radius;
  }
  return [x, y];
};
