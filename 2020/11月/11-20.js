// var characterReplacement = function (s, k) {
//   const l = s.length;
//   if (k >= l - 1) return l;
//   const map = {
//     [s[0]]: 1,
//   };
//   let max = 1;
//   let res = 0;
//   let left = 0;
//   for (let i = 1; i < l; i++) {
//     map[s[i]] = (map[s[i]] || 0) + 1;
//     max = Math.max(map[s[i]], max);
//     while (i + 1 - left - max > k) {
//       map[s[left]]--;
//       left++;
//       const keys = Object.keys(map);
//       max = 0;
//       keys.forEach((item) => {
//         max = Math.max(map[item], max);
//       });
//     }
//     res = Math.max(res, i - left + 1);
//   }
//   return res;
// };
// var characterReplacement = function (s, k) {
//   let left = 0,
//     max = 0;
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     map.set(s[i], (map.get(s[i]) || 0) + 1);
//     max = Math.max(map.get(s[i]), max);
//     if (i - left + 1 - max > k) {
//       map.set(s[i], map.get(s[i]) - 1);
//       left++;
//     }
//   }
//   return s.length - left;
// };

// const s = "ACADF",
//   k = 1;
// console.log(characterReplacement(s, k));
// var reverseLeftWords = function (s, n) {
//   const l = s.length;
//   n %= l;
//   return s.slice(n) + s.slice(0, n);
// };
var maxSlidingWindow = function (nums, k) {
  const l = nums.length;
  const res = new Array(l + 1 - k);
  let stack = [];
  for (let i = 0; i < k; i++) {
    stack = stack.filter((item) => item >= nums[i]);
    stack.push(nums[i]);
  }
  res[0] = stack[0];
  for (let i = k; i < l; i++) {
    if (stack[0] === nums[i - k]) stack.shift();
    stack = stack.filter((item) => item >= nums[i]);
    stack.push(nums[i]);
    console.log(stack);
    res[i + 1 - k] = stack[0];
  }
  return res;
};
const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k));
