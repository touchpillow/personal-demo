// var reverse = function (x) {
//   const isValid = (v) => {
//     return v >= -1 * Math.pow(2, 31) && v <= Math.pow(2, 31);
//   };
//   let res = "";
//   const s = Math.abs(x).toString();
//   for (let j = s.length - 1; j >= 0; j--) {
//     res += s[j];
//   }
//   res = x >= 0 ? Number(res) : -1 * Number(res);
//   return isValid(res) ? res : 0;
// };

// 遍历比较
var longestCommonPrefix = function (strs) {
  const s1 = strs[0];
  if (!s1) return "";
  const l1 = s1.length,
    l2 = strs.length;
  if (l2 < 2) return s1;
  let res = "";
  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < l2; j++) {
      if (s1[i] !== strs[j][i]) {
        return res;
      }
    }
    res += s1[i];
  }
  return res;
};

//模拟字典树
var longestCommonPrefix = function (strs) {
  const l1 = strs.length;
  if (!l1) return "";
  const charTree = [...strs[0]];
  let maxLength = strs[0].length;
  for (let i = 1; i < l1; i++) {
    const s = strs[i];
    const ls = s.length;
    if (!ls) return "";
    let level = 0;
    while (level < ls && level < maxLength && charTree[level] === s[level]) {
      level++;
    }
    maxLength = level;
  }
  return strs[0].slice(0, maxLength);
};

//二分法
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  if (target > nums[right]) {
    return right + 1;
  }
  if (target <= nums[0]) return 0;
  while (left < right) {
    const middle = ~~((left + right) / 2);
    if (middle === left) break;
    if (nums[middle] === target) return middle;
    if (nums[middle] > target) {
      right = middle;
    } else {
      left = middle;
    }
  }
  return right;
};
console.log(searchInsert([1, 3, 5, 6], 5));
