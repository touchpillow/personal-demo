// var wiggleMaxLength = function (nums) {
//   let l = nums.length;
//   const res = [nums[0]];
//   for (let i = 1; i < l; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       res.push(nums[i]);
//     }
//   }
//   nums = res.slice();
//   l = nums.length;
//   res.fill(1);
//   const list = new Array(l).fill(1);
//   for (let i = 1; i < l; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (nums[j] > nums[i]) {
//         res[i] = Math.max(list[j] + 1, res[i]);
//       } else {
//         list[i] = Math.max(res[j] + 1, list[i]);
//       }
//     }
//   }

//   return Math.max(...res, ...list);
// };

// var wiggleMaxLength = function (nums) {
//   let l = nums.length;
//   const res = new Array(l).fill(1);
//   const list = new Array(l).fill(1);
//   for (let i = 1; i < l; i++) {
//     if (nums[i] > nums[i - 1]) {
//       list[i] = res[i - 1] + 1;
//       res[i] = res[i - 1];
//     } else if (nums[i] < nums[i - 1]) {
//       res[i] = list[i - 1] + 1;
//       list[i] = list[i - 1];
//     } else {
//       res[i] = res[i - 1];
//       list[i] = list[i - 1];
//     }
//   }
//   return Math.max(res[l - 1], list[l - 1]);
// };
// var wiggleMaxLength = function (nums) {
//   let l = nums.length;
//   if (l < 2) return nums.length;
//   let v1 = 1,
//     v2 = 1;
//   for (let i = 1; i < l; i++) {
//     if (nums[i] > nums[i - 1]) {
//       v1 = v2 + 1;
//     } else if (nums[i] < nums[i - 1]) {
//       v2 = v1 + 1;
//     }
//   }
//   return Math.max(v1, v2);
// };
// const a = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
// console.log(wiggleMaxLength(a));
// var xorOperation = function (n, start) {
//   const res = start;
//   for (let i = 1; i < n; i++) {
//     start += 2;
//     res ^= start;
//   }
//   return res;
// };
var average = function (salary) {
  let min = salary[0];
  let max = salary[0];
  const l = salary.length;
  const sum = salary[0];
  for (let i = 1; i < l; i++) {
    sum += salary[i];
    min = min < salary[i] ? min : salary[i];
    max = max > salary[i] ? max : salary[i];
  }
  return (sum - min - max) / (l - 2);
};
