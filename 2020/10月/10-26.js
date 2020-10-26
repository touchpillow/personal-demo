// var maxPower = function (s) {
//   let max = 1;
//   const l = s.length;
//   let left = 0;
//   for (let i = 1; i < l; i++) {
//     while (s[i] == s[i - 1] && i < l) {
//       i++;
//     }
//     max = Math.max(max, i - left);
//     left = i;
//   }
//   return max;
// };
// const s = "abbcccddddeeeeedcbaaaaaaa";
// console.log(maxPower(s));
// var busyStudent = function (startTime, endTime, queryTime) {
//   let count = 0;
//   const l = startTime.length;
//   for (let i = 0; i < l; i++) {
//     if (startTime[i] <= queryTime && endTime[i] >= queryTime) count++;
//   }
//   return count;
// };
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b);
  const l = nums.length;
  if (l < 2) return nums;
  const list = nums.map((item) => [item]);
  for (let i = 1; i < l; i++) {
    for (let j = 0; j < i; j++) {
      const temp = list[j];
      const last = temp[temp.length - 1];
      if (!(nums[i] % last)) {
        if (temp.length >= list[i].length) {
          list[i] = list[j].concat(nums[i]);
        }
      }
    }
  }
  const res = list.map((i) => i.length);
  const max = Math.max(...res);
  return list.find((i) => i.length == max);
};
const a = [4, 2, 8, 1];
console.log(largestDivisibleSubset(a));
