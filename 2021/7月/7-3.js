// var jump = function (nums) {
//   const l = nums.length;
//   const count = new Array(l).fill(Infinity);
//   count[0] = 0;
//   for (let i = 0; i < l - 1; i++) {
//     if (count[i] >= count[l - 1]) continue;
//     for (let j = 1; i + j < l && j <= nums[i]; j++) {
//       count[i + j] = Math.min(count[i + j], count[i] + 1);
//     }
//   }

//   return count[l - 1];
// };
var jump = function (nums) {
  const l = nums.length;
  let position = 0,
    end = 0,
    step = 0;
  for (let i = 0; i < l - 1; i++) {
    position = Math.max(nums[i] + i, position);
    if (i === end) {
      end = position;
      step++;
    }
  }
  return step;
};
const a = [3, 4, 1, 1, 1, 1];

console.log(jump(a));
