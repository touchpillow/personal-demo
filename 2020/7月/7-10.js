// var canWinNim = function (n) {
//   return !!(n % 4);
// };
// var getHint = function (secret, guess) {
//   const l = `${secret}`.length;
//   let a = 0;
//   let b = 0;
//   const stack = [];
//   const list = [];
//   for (let i = 0; i < l; i++) {
//     if (secret[i] === guess[i]) {
//       a++;
//     } else {
//       stack.push(secret[i]);
//       list.push(guess[i]);
//     }
//   }
//   list.forEach((i) => {
//     const index = stack.findIndex((item) => i == item);
//     if (index >= 0) {
//       b++;
//       stack[index] = "B";
//     }
//   });
//   return `${a}A${b}B`;
// };
var middleSearch = (nums, start, end, target) => {
  console.log(start, end, target);
  while (start !== end) {
    if (nums[start] == target) return start;
    if (nums[end] == target) return end;
    const middle = Math.floor((start + end) / 2);
    if (middle === start) return -1;
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      end = middle;
    } else {
      start = middle;
    }
  }
  return nums[start] === target ? start : -1;
};
var searchPart = (nums, start, end, target) => {
  console.log(start, end, target);
  while (start !== end) {
    if (nums[start] == target) return start;
    if (nums[end] == target) return end;
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] == target) return middle;
    if (middle === start) return -1;
    if (nums[start] > nums[middle]) {
      if (target > nums[start] || target < nums[middle]) {
        end = middle - 1;
        return searchPart(nums, start, end, target);
      } else {
        start = middle + 1;
        return middleSearch(nums, start, end, target);
      }
    } else {
      if (target > nums[middle] || target < nums[start]) {
        start = middle + 1;
        return searchPart(nums, start, end, target);
      } else {
        end = middle - 1;
        return middleSearch(nums, start, end, target);
      }
    }
  }
  return nums[start] === target ? start : -1;
};
var search = function (nums, target) {
  return searchPart(nums, 0, nums.length - 1, target);
};
var a = [4, 5, 6, 7, 0, 1, 2];
var b = 1;
console.log(search(a, b));
