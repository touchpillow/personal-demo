// var findLengthOfLCIS = function (nums) {
//   let length = 0;
//   let index = 0;
//   const l = nums.length;
//   for (let i = 0; i < l; i++) {
//     if (nums[i] <= (nums[i - 1] || -Infinity)) {
//       length = Math.max(i - index, length);
//       index = i;
//     }
//     console.log(length, i, index);
//   }
//   console.log(index);
//   return Math.max(l - index, length);
// };
// var a = [1, 0, 0, 8, 6];
// console.log(findLengthOfLCIS(a));
// var validPalindrome = function (s) {
//   const valdate = (s, count) => {
//     let left = 0;
//     let right = s.length - 1;
//     if (right < 1) return true;
//     while (left < right) {
//       if (count > 1) return false;
//       if (s[left] === s[right]) {
//         left++;
//         right--;
//       } else {
//         if (!count) {
//           return (
//             valdate(s.slice(left + 1, right + 1), 1) ||
//             valdate(s.slice(left, right), 1)
//           );
//         } else {
//           return false;
//         }
//       }
//     }
//     return true;
//   };
//   return valdate(s, 0);
// };
// var s =
//   "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga";
// console.log(validPalindrome(s));
var sortedListToBST = function (head) {
  if (!head) return null;

  const node = new ListNode();
  node.next = head;
  let fast = node;
  let slow = node;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  const root = new TreeNode(slow.next.val);
  const right = slow.next.next;
  slow.next = null;
  root.left = sortedListToBST(node.next);
  root.right = sortedListToBST(right);
  return root;
};
