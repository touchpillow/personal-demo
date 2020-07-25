// var missingNumber = function (nums) {
//   let sum = (0 + nums.length)(nums.length) / 2;
//   for (const i of nums) {
//     sum -= i;
//   }
//   return item;
// };
// var solution = function (isBadVersion) {
//   /**
//    * @param {integer} n Total versions
//    * @return {integer} The first bad version
//    */
//   return function (n) {
//     if (n == 1) return n;
//     let left = 1;
//     while (!(n - left == 1 && !isBadVersion(left) && isBadVersion(n))) {
//       const middle = Math.floor((left + n) / 2);
//       if (isBadVersion(middle)) {
//         n = middle;
//       } else {
//         left = middle;
//       }
//     }
//     return left;
//   };
// };
var swapPairs = function (head) {
  const node = head;
  if (head && head.next) {
    head = head.next;
    node.next = swapPairs(head.next);
    head.next = node;
  }
  return head;
};
