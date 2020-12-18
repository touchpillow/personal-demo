// const isChild = (father, son) => {
//   if (father.includes(son)) return true;
//   let i = 0;
//   let j = 0;
//   while (i < father.length && j < son.length) {
//     if (father[i] === son[j]) {
//       i++;
//       j++;
//     } else {
//       i++;
//     }
//   }
//   return j === son.length;
// };

// var findLUSlength = function (strs) {
//   strs.sort((a, b) => b.length - a.length);
//   const l = strs.length;
//   const tempList = [];
//   for (let i = 0; i < l; i++) {
//     let flag = true;
//     for (let j = 0; j < l; j++) {
//       if (i === j) continue;
//       if (strs[j].length < strs[i].length) break;
//       if (isChild(strs[j], strs[i])) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) return strs[i].length;
//   }
//   return -1;
// };
// const strs = ["aabbcc", "aabbcc", "ca"];
// console.log(findLUSlength(strs));
// var checkSubarraySum = function (nums, k) {
//   const l = nums.length;
//   if (l < 2) return false;
//   const left = new Array(l).fill(0);
//   const right = new Array(l).fill(0);
//   left[0] = 0;
//   right[l - 1] = 0;
//   for (let i = 1; i < l; i++) {
//     left[i] = nums[i - 1] + left[i - 1];
//   }
//   for (let i = l - 2; i >= 0; i--) {
//     right[i] = nums[i + 1] + right[i + 1];
//   }
//   const sum = nums.reduce((a, b) => a + b);
//   for (let i = 0; i < l - 1; i++) {
//     for (let j = i + 1; j < l; j++) {
//       const temp = sum - left[i] - right[j];
//       if (!temp && !k) return true;
//       if (!(temp % k)) return true;
//     }
//   }
//   return false;
// };
// const nums = [5, 0, 0],
//   k = 0;

// console.log(checkSubarraySum(nums, k));
var checkSubarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, -1);
  let sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (k) {
      sum = sum % k;
    }
    if (map.has(sum) && i - map.get(sum) > 1) {
      return true;
    } else if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  return false;
};
const nums = [0, 1, 0],
  k = 0;
console.log(checkSubarraySum(nums, k));
