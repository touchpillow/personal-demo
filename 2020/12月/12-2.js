// var findMagicIndex = function (nums) {
//   return nums.find((item, index) => item == index) ?? -1;
// };
// var hanota = function (A, B, C) {
//   while(A.length){
//       while(){}
//   }
// };
// var findMinArrowShots = function (points) {
//   points.sort((a, b) => {
//     if (a[1] !== b[1]) return a[1] - b[1];
//     return a[0] - b[0];
//   });
//   let c = 0;
//   let pre = -Infinity;
//   for (const item of points) {
//     if (item[0] > pre) {
//       c++;
//       pre = item[1];
//     }
//   }
//   return c;
// };
var findMinArrowShots = function (points) {
  points.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  const l = points.length;
  let c = 0;
  let pre = Infinity;
  for (let i = l - 1; i >= 0; i--) {
    if (points[i][1] < pre) {
      c++;
      pre = points[i][0];
    }
  }
  return c;
};
