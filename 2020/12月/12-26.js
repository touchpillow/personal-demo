// var subarraySum = function (nums, k) {
//   const l = nums.length;
//   if (l < 2) return nums[0] === k ? 1 : 0;
//   let c = 0;

//   for (let i = 0; i < l; i++) {
//     let sum = 0;
//     for (let j = i; j < l; j++) {
//       sum += nums[j];
//       if (sum === k) {
//         c++;
//       }
//     }
//   }
//   return c;
// };
// var subarraySum = function (nums, k) {
//   const l = nums.length;
//   let v = 0;
//   let c = 0;
//   const map = new Map();
//   map.set(0, 1);
//   for (let i = 0; i < l; i++) {
//     v += nums[i];
//     c += map.get(v - k) || 0;
//     map.set(v, (map.get(v) || 0) + 1);
//   }
//   return c;
// };
var arrayNesting = function (nums) {
  const l = nums.length;
  let res = 0;
  for (let i = 0; i < l; i++) {
    let c = 0;
    let v = i;
    while (nums[v] < 30000) {
      c++;
      nums[v] = 30000;
      v = nums[v];
    }
    res = Math.max(res, c);
  }
  return res;
};
