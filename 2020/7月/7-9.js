// var moveZeroes = function (nums) {
//   let length = nums.length;
//   let start = 0;
//   let i = 0;
//   while (start < length) {
//     if (nums[start] === 0) {
//       nums.push(nums.splice(i, 1));
//     } else {
//       i++;
//     }
//     start++;
//   }
//   return nums;
// };
// var moveZeroes = function (nums) {
//   const l = nums.length;
//   let i = 0;
//   let index = 0;
//   while (i < l) {
//     if (nums[i] !== 0) {
//       index++;
//       if (i !== index) {
//         [nums[i], nums[index]] = [nums[index], nums[i]];
//       }
//     }
//     i++;
//   }
// };
// var wordPattern = function (pattern, str) {
//   const l = str.length;
//   const map = {};
//   const map2 = {};
//   let i = 0;
//   let s = "";
//   let si = 0;
//   while (i < l) {
//     if (s && str[i] === " ") {
//       if (map[pattern[si]] && map[pattern[si]] !== s) return false;
//       if (map2[s] && map2[s] !== pattern[si]) return false;
//       if (si >= pattern.length) return false;
//       map[pattern[si]] = s;
//       map2[s] = pattern[si];
//       s = "";
//       si++;
//     } else if (str[i] !== " ") {
//       s += str[i];
//     }
//     i++;
//   }
//   if (!str && si !== pattern.length) return false;
//   if (str && si !== pattern.length) return false;
//   console.log(map, map2, s, si);
//   return (
// s ||
//     (map[pattern[si]] &&
//       map[pattern[si]] === s &&
//       map2[s] &&
//       map2[s] === pattern[si]) ||
//     (!map[pattern[si]] && !map2[s])
//   );
// };
// console.log(wordPattern("jquery", "jquery"));
// var divide = function (dividend, divisor) {
//   const max = 2147483647;
// };
var nextPermutation = function (nums) {
  const length = nums.length;
  for (let j = length - 1; j >= 1; j--) {
    if (nums[j] > nums[j - 1]) {
      for (let i = length - 1; i >= j; i--) {
        if (nums[i] > nums[j - 1]) {
          [nums[i], nums[j - 1]] = [nums[j - 1], nums[i]];
          console.log(j);
          for (let k = j; k < (j + length - 1) / 2; k++) {
            [nums[k], nums[length - 1 + j - k]] = [
              nums[length - 1 - k],
              nums[k],
            ];
          }
          return nums;
        }
      }
      break;
    }
  }
  return nums.sort((a, b) => a - b);
};
nextPermutation([1, 3, 2]);
