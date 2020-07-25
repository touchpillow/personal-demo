// var reverseString = function (s) {
//   const l = s.length;
//   for (let i = 0; i < l / 2; i++) {
//     [s[i], s[l - 1 - i]] = [s[l - 1 - i], s[i]];
//   }
// };
// var intersection = function (nums1, nums2) {
//   let l1 = nums1.length;
//   let l2 = nums2.length;
//   const res = new Set();
//   if (l1 > l2) {
//     while (l2--) {
//       if (nums1.include(nums2[l2])) {
//         res.add(nums2[l2]);
//       }
//     }
//   } else {
//     while (l1--) {
//       if (nums2.include(nums1[l1])) {
//         res.add(nums1[l1]);
//       }
//     }
//   }
//   return [...res];
// };
// var intersect = function (nums1, nums2) {
//   const map = new Map();
//   const res = [];
//   let i = 0;
//   let list1 = l1 > l2 ? nums1 : nums2;
//   let list2 = l1 > l2 ? nums2 : nums1;
//   while (i < list2.length) {
//     let index = map.get(list2[i]);
//     index = index === undefined ? 0 : index + 1;
//     const newIndex = list1.indexOf(list2[i], index);
//     if (newIndex >= 0) {
//       map.set(list2[i], newIndex);
//       res.push(list2[i]);
//     }
//   }
// };
// var intersect = function (nums1, nums2) {
//   const map = new Map();
//   const res = [];
//   if (nums1.length > nums2.length) {
//     [nums1, nums2] = [nums2, nums1];
//   }
//   for (let i = 0, l = nums1.length; i < l; i++) {
//     const oldCount = map.get(nums1[i]);
//     if (!oldCount) {
//       map.set(nums1[i], 1);
//     } else {
//       map.set(nums1[i], oldCount + 1);
//     }
//   }
//   for (let i = 0, l = nums2.length; i < l; i++) {
//     const oldCount = map.get(nums2[i]);
//     if (oldCount > 0) {
//       res.push(nums2[i]);
//       map.set(nums2[i], oldCount - 1);
//     }
//   }
//   return res;
// };
// var searchMiddle = (nums, target, start, end, type) => {
//   while ((type && nums[start] !== target) || (!type && nums[end] !== target)) {
//     const middle = Math.floor((start + end) / 2);
//     if (middle === start) {
//       if (type) {
//         return end;
//       } else {
//         return start;
//       }
//     }
//     if (nums[middle] !== target) {
//       if (type) {
//         start = middle;
//       } else {
//         end = middle;
//       }
//     } else {
//       if (type) {
//         end = middle;
//       } else {
//         start = middle;
//       }
//     }
//   }
//   if (type) {
//     return end;
//   } else {
//     return start;
//   }
// };
// var searchRange = function (nums, target) {
//   let start = 0;
//   let end = nums.length - 1;
//   if (nums[start] === target) {
//     end = searchMiddle(nums, target, middle, end, false);
//   } else if (nums[end] === target) {
//     start = searchMiddle(nums, target, start, middle, true);
//   } else {
//     while (nums[start] !== target || nums[end] !== target) {
//       const middle = Math.floor((start + end) / 2);
//       if (middle === start) {
//         start = end = -1;
//       }
//       if (nums[middle] > target) {
//         end = middle;
//       } else if (nums[middle] < target) {
//         start = middle;
//       } else {
//         start = searchMiddle(nums, target, start, middle, true);
//         end = searchMiddle(nums, target, middle, end, false);
//         break;
//       }
//     }
//   }

//   return [start, end];
// };
// var checkRow = (row) => {
//   const a = row.filter((i) => i !== ".");
//   return new Set(a).size === a.length;
// };
// var checkBoard = (board) => {
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       const item = [];
//       for (let k = 0; k < 3; k++) {
//         for (let n = 0; n < 3; n++) {
//           item.push(board[3 * i + k][3 * j + n]);
//         }
//       }
//       if (!checkRow(item)) return false;
//     }
//   }
//   return true;
// };
// var isValidSudoku = function (board) {
//   const column = [];
//   for (let i = 0; i < 9; i++) {
//     column.push(board.map((item) => item[i]));
//   }
//   return (
//     checkBoard(board) &&
//     board.every((item) => checkRow(item)) &&
//     column.every((item) => checkRow(item))
//   );
// };
// var a = [
//   [".", 1, 2, ".", 4, 1, 6, ".", 4],
//   [".", 2, 3, ".", 4, 2, 6, ".", 8],
//   [".", 3, 2, ".", 4, 3, 6, ".", 1],
//   [".", 5, 6, ".", 4, 4, 6, ".", 1],
//   [".", 1, 8, ".", 4, 5, 6, ".", 8],
//   [".", 9, 2, ".", 4, 6, 6, ".", 2],
//   [".", 1, 6, ".", 4, 7, 6, ".", 4],
//   [".", 1, 5, ".", 4, 8, 6, ".", 3],
//   [".", 9, 7, ".", 4, 9, 6, ".", 2],
// ];
// var isValidSudoku = function (board) {
//   const box = new Map();
//   const column = new Map();
//   for (let i = 0; i < 9; i++) {
//     const row = board[i];
//     for (let j = 0; j < 9; j++) {
//       const boxIndex = ~~(i / 3) * 3 + ~~(j / 3);
//       const val = board[i][j];
//       if (val === ".") continue;
//       if (
//         row.indexOf(val) !== j ||
//         box.get(`${boxIndex}-${val}`) ||
//         column.get(`${j}-${val}`)
//       ) {
//         return false;
//       } else {
//         box.set(`${boxIndex}-${val}`, true);
//         column.set(`${j}-${val}`, true);
//       }
//     }
//   }
//   return true;
// };
var combinationSum = function (candidates, target) {};
