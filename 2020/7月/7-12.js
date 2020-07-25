// var isPerfectSquare = function (num) {
//   let i = 0;
//   while (i * i < num) {
//     i++;
//   }
//   return i * i === num;
// };
// var guessNumber = function (n) {
//   let start = 1;
//   if (!guess(start)) return start;
//   if (!guess(n)) return n;
//   while (true) {
//     const middle = Math.floor((start + n) / 2);
//     const res = guess(middle);

//     if (!res) return middle;
//     if (res > 0) {
//       n = middle;
//     } else {
//       start = middle;
//     }
//   }
// };
// var combinationSumA=()=>{

// }
// var combinationSum = function (candidates, target) {
//   const res = [];
// };
var permuteA = (nums, res, pre) => {
  if (nums.length == 1) {
    res.push(pre.concat(nums[0]));
    return res
  } else {
    return nums.reduce((res, item, index) => {
      const a = nums.slice(0);
      const newItem = pre.slice();
      newItem.push(item);
      a.splice(index, 1);
      return permuteA(a, res, newItem);
    }, res);
  }

  //   if (nums.length == 1) {
  //     res.push(pre.concat(nums[0]));
  //   } else {
  //     nums.forEach((item, index) => {
  //       const a = nums.slice(0);
  //       const newItem = pre.slice();
  //       newItem.push(item);
  //       permuteA(a.splice(index, 1), res, newItem);
  //     });
  //   }
};
var permute = function (nums) {
  const res = [];
  return permuteA(nums, res, []);
};
