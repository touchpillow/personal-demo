// var searchInsert = function (nums, target) {
//   let l = nums.length,
//     j = -1;
//   if (target <= nums[0]) return 0;
//   if (target > nums[l - 1]) return l;
//   for (let i = 0; i < l; i++) {
//     if (nums[i] === target) return i;
//     if (nums[i] < target) j = i;
//   }
//   return j + 1;
// };
var countAndSay = function (n) {
  if (n == 1) return "1";
  let res = "1",
    v = "0",
    a = 0,
    r = "";
  for (let i = 1; i < n; i++) {
    let l = res.length;
    for (let j = 0; j < l; j++) {
      if (res[j] !== v) {
        if (a) {
          r += `${a}${v}`;
        }
        v = res[j];
        a = 1;
      } else {
        a++;
      }
    }
    if (a) {
      r += `${a}${v}`;
    }
    v = "0";
    res = r;
    a = 0;
    r = "";
  }
  return res;
};
