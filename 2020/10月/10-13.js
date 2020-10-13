// var wiggleSort = function (nums) {
//   const l = nums.length;
//   nums.sort((a, b) => b - a);
//   const left = nums.slice(0, ~~(l / 2));
//   const right = nums.slice(~~(l / 2));
//   for (let i = 0; i < l; i++) {
//     if (i % 2) {
//       nums[i] = left.shift();
//     } else {
//       nums[i] = right.shift();
//     }
//   }
//   return nums;
// };
// const nums = [1, 5, 1, 1, 6, 4];
// console.log(wiggleSort(nums));
// const getMid = (left, right, nums) => {
//   const l = nums.length;
//   let mid = nums[~~(l / 2)];
//   const leftL = [],
//     rightL = [];
//   let v = 0;
//   for (const n of nums) {
//     if (n > mid) {
//       rightL.push(n);
//     } else if (n < mid) {
//       leftL.push(n);
//     } else {
//       v++;
//     }
//   }
//   console.log(left, right, leftL.length, rightL.length, mid, l, v);
//   if (Math.abs(left + leftL.length - right - rightL.length) <= v) return mid;
//   if (left + leftL.length > right + rightL.length) {
//     return getMid(left, rightL.length + right + v, leftL);
//   } else {
//     return getMid(left + leftL.length + v, right, rightL);
//   }
// };
// var wiggleSort = function (nums) {
//   const l = nums.length;
//   const mid = getMid(0, 0, nums.slice());
//   const left = [],
//     right = [];
//   let v = 0;
//   for (const n of nums) {
//     if (n > mid) {
//       right.push(n);
//     } else if (n < mid) {
//       left.push(n);
//     } else {
//       v++;
//     }
//   }
//   const c = left.length - right.length;
//   if (c == 0) {
//     left.splice(0, 0, ...new Array(Math.ceil(v / 2)).fill(mid));
//     right.push(...new Array(~~(v / 2)).fill(mid));
//   } else if (c > 0) {
//     v -= c;
//     left.splice(0, 0, ...new Array(Math.ceil(v / 2)).fill(mid));
//     right.push(...new Array(~~(v / 2) + c).fill(mid));
//   } else {
//     v += c;
//     left.splice(0, 0, ...new Array(Math.ceil(v / 2) - c).fill(mid));
//     right.push(...new Array(~~(v / 2)).fill(mid));
//   }
//   for (let i = 0; i < l; i++) {
//     if (i % 2) {
//       nums[i] = right.shift();
//     } else {
//       nums[i] = left.shift();
//     }
//   }
//   return nums;
// };
// const nums = [1, 5, 1, 1, 6, 4];

// console.log(wiggleSort(nums));
// var getNoZeroIntegers = function (n) {
//   let v1 = 1;
//   let v2 = n - 1;
//   while (true) {
//     if (`${v1}${v1}`.includes(0)) {
//       v1++;
//       v2--;
//     } else {
//       return [v1, v2];
//     }
//   }
// };
// var maximum69Number = function (num) {
//   let s = `${num}`;
//   let res = "";
//   let v = false;
//   for (const n of s) {
//     if (n == "6" && !v) {
//       res += "9";
//       v = true;
//     } else {
//       res += n;
//     }
//   }
//   return +res;
// };
var maximum69Number = function (num) {
  return +`${num}`.replace("6", "9");
};
