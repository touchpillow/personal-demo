// var lengthOfLongestSubstring = function (s) {
//   let stack = [];
//   let res = 0;
//   for (let i = 0, l = s.length; i < l; i++) {
//     if (stack.includes(s[i])) {
//       res = stack.length > res ? stack.length : res;
//       const x = stack.indexOf(s[i]);
//       stack.splice(0, x + 1);
//       stack.push(s[i]);
//     } else {
//       stack.push(s[i]);
//     }
//   }
//   res = stack.length > res ? stack.length : res;
//   return res;
// };
// console.log(lengthOfLongestSubstring("pwwkew"));
// var lengthOfLongestSubstring = function (s) {
//   let map = {},
//     max = 0;
//   for (let i = 0, j = 0; j < s.length; j++) {
//     if (map[s[j]] !== undefined) {
//       i = Math.max(map[s[j]] + 1, i);
//     }
//     max = Math.max(max, j - i + 1);
//     map[s[j]] = j;
//   }
//   return max;
// };
// console.log(lengthOfLongestSubstring("cdd"));
var containsNearbyDuplicate = function (nums, k) {
  let map = {};
  for (let i = 0, l = nums.length; i < l; i++) {
    if (map[nums[i]] !== undefined) {
      if (i - map[nums[i]] <= k) return true;
    }
    map[nums[i]] = i;
  }
  return false;
};
