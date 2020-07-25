var removeElement = function (nums, val) {
  let l = nums.length,
    res = 0;
  for (let i = 0; i < l; i++) {
    if (nums[i] !== val) {
      nums[res] = nums[i];
      res++;
    }
  }
  return res;
};
// var removeElement = function (nums, val) {
//   let l = nums.length;
//   for (let i = 0; i < l; ) {
//     if (nums[i] === val) {
//       nums[i] = nums[l - 1];
//       l--;
//     } else {
//       i++;
//     }
//   }
//   return l;
// };
var strStr = function (haystack, needle) {
  let l = needle.length;
  if (!l) return l;
  let l2 = haystack.length;
  if (!l2) return -1;
  if (l > l2) return -1;
  for (let i = 0; i < l2; i++) {
    if (l2 - i < l) return -1;
    for (let j = 0; j < l; j++) {
      if (haystack[i + j] !== needle[j]) break;
      if (j === l - 1) {
        return i;
      }
    }
  }
};
console.log(strStr("mississippi", "mississippi"));
