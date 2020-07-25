// var binaryTreePaths = function (root, str) {
//   if (!root) return [];
//   str = str ? `${str}->${root.str}` : `${root.val}`;
//   const res = [];
//   if (!root.left && !root.right) {
//     return [str];
//   }
//   return binaryTreePaths(root.left, str).concat(
//     binaryTreePaths(root.right, str)
//   );
// };
// var binaryTreePathsDeep = (root, str, res) => {
//   if (!root) return;
//   str += `->${root.val}`;
//   if (!root.left && !root.right) {
//     res.push(str);
//   }
//   if (root.left) {
//     binaryTreePathsDeep(root.left, str, res);
//   }
//   if (root.right) {
//     binaryTreePathsDeep(root.right, str, res);
//   }
// };
// var binaryTreePaths = function (root) {
//   if (!root) return [];
//   const stack = [];
//   const res = [];
//   stack.push({
//     str: "",
//     node: root,
//   });
//   while (stack.length) {
//     const item = stack.shift();
//     const str = item.str ? `${str}->${item.val}` : `${item.val}`;
//     if (!item.left && !item.right) {
//       res.push(str);
//     } else {
//       if (item.left) {
//         stack.push({
//           str,
//           node: item.left,
//         });
//       }
//       if (item.right) {
//         stack.push({
//           str,
//           node: item.right,
//         });
//       }
//     }
//   }
//   return res;
// };
// var removeNthFromEnd = function (head, n) {
//   const res = [];
//   let node = head;
//   while (node) {
//     res.push(node);
//     node = node.next;
//   }
//   res[l - 1 - n].next = res[l - n].next;
//   return head;
// };
var removeNthFromEnd = function (head, n) {
  const node = new ListNode(1);
  node.next = head;
  let slow = node;
  let fast = node;
  while (n--) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return node.next;
};
