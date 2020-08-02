// var distributeCandies = function (candies) {
//   const l = candies.length / 2;
//   const kind = new Set(candies).size;
//   return Math.min(l, kind);
// };
// var findUnsortedSubarray = function (nums) {
//   const map1 = new Map();
//   const map2 = new Map();
//   const l = nums.length;
//   let start = Infinity;
//   let end = 0;
//   for (let i = 0; i < l; i++) {
//     if (!map1.has(nums[i])) {
//       map1.set(nums[i], i);
//     }
//     map2.set(nums[i], i);
//   }
//   for (let i = 1; i < l; i++) {
//     if (nums[i] < nums[i - 1]) {
//       let startV = nums[i] + 1;
//       while (!(map1.has(startV) && map1.get(startV) < i)) {
//         startV++;
//       }
//       start = Math.min(start, map1.get(startV));
//       let endv = nums[i - 1] - 1;
//       while (!(map2.has(endv) && map2.get(endv) > i - 1)) {
//         endv--;
//       }
//       end = Math.max(end, map2.get(endv));
//     }
//   }
//   console.log(end, start);
//   return !end ? 0 : end - start + 1;
// };
// var a = [1, 4, 5, 2, 3];
// console.log(findUnsortedSubarray(a));
// function ListNode(a) {
//   this.val = a;
//   this.next = null;
// }
// var partition = function (head, x) {
//   if (!head || !head.next) return head;
//   const top = new ListNode(null);
//   const bottom = new ListNode(null);
//   let left = top;
//   let right = bottom;
//   while (head) {
//     if (head.val < x) {
//       left.next = head;
//       left = left.next;
//     } else {
//       right.next = head;
//       right = right.next;
//     }
//     head = head.next;
//   }
//   debugger;
//   left.next = bottom.next;
//   return top.next;
// };
// var a = {
//   val: 1,
//   next: {
//     val: 4,
//     next: {
//       val: 3,
//       next: {
//         val: 2,
//         next: {
//           val: 5,
//           next: {
//             val: 2,
//             next: null,
//           },
//         },
//       },
//     },
//   },
// };
// partition(a, 3);
