// var mergeTwoLists = function (l1, l2) {
//   if (!l1) return l2;
//   if (!l2) return l1;
//   if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// };
// var mergeTwoLists = function (l1, l2) {
//   if (!l1) return l2;
//   if (!l2) return l1;
//   const head = new ListNode();
//   let v = head;
//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       v.next = l1;
//       l1 = l1.next;
//       v = v.next;
//       v.next = null;
//     } else {
//       v.next = l2;
//       l2 = l2.next;
//       v = v.next;
//       v.next = null;
//     }
//   }
//   if (!l1) {
//     v.next = l2;
//   } else {
//     v.next = l1;
//   }
//   return head.next;
// };
// var mirrorTree = function (root) {
//   if (!root) return root;
//   [root.left, root.right] = [mirrorTree(right), mirrorTree(left)];
//   return root;
// };
// var reconstructQueue = function (people) {
//   people.sort((a, b) => a[1] - b[1]);
//   const stack = [];
//   for (const item of people) {
//     if (!stack.length) {
//       stack.push(item);
//     } else {
//       const templ = stack.length;
//       let c = 0;
//       for (let i = 0; i < templ; i++) {
//         if (c === item[1]) {
//           if (stack[i][0] >= item[0]) {
//             stack.splice(i, 0, item);
//             break;
//           } else {
//             continue;
//           }
//         } else {
//           if (stack[i][0] >= item[0]) {
//             c++;
//           }
//           continue;
//         }
//       }
//       if (templ === stack.length) {
//         stack.push(item);
//       }
//       console.log(item, stack);
//     }
//   }
//   return stack;
// };
// var reconstructQueue = function (people) {
//   people.sort((a, b) => {
//     if (a[0] === b[0]) {
//       return a[1] - b[1];
//     }
//     return b[0] - a[0];
//   });
//   const stack = [];
//   for (const item of people) {
//     if (!stack.length) {
//       stack.push(item);
//     } else {
//       stack.splice(item[1], 0, item);
//     }
//   }
//   return stack;
// };
// const nums = [
//   [7, 0],
//   [4, 4],
//   [7, 1],
//   [5, 0],
//   [6, 1],
//   [5, 2],
// ];
// console.log(reconstructQueue(nums));
// var isSymmetric = function (root) {
//   if (!root) return true;
//   const stack = [root];
//   while (stack.length) {
//     if (stack.length < 2) {
//       const item = stack.pop();
//       if (!item) return true;
//       stack.push(item.left, item.right);
//     } else {
//       const left = [];
//       const right = [];
//       while (stack.length > 1) {
//         const top = stack.shift();
//         const bottom = stack.pop();
//         if (top === bottom) continue;
//         if (!top || !bottom) return false;
//         if (top.val !== bottom.val) return false;
//         left.push(top.left, top, right);
//         right.unshift(bottom.left, bottom.right);
//       }
//       if (stack.length && stack[0]) {
//         left.push(stack[0].left, stack[0].right);
//       }
//       stack.push(...left, ...right);
//     }
//   }
//   return true;
// };
// var spiralOrder = function (matrix) {
//   const res = [];

// };
// var MinStack = function () {
//   this.val = [];
//   this.index = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function (x) {
//   this.val.push(x);
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   this.val.pop(x);
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {};

// /**
//  * @return {number}
//  */
// MinStack.prototype.min = function () {};
var levelOrder = function (root) {
  if (!root) return [];
  const stack = [];
  const search = (root, leval = 0) => {
    if (!root) return;
    if (stack[level]) {
      stack[level].push(root.val);
    } else {
      stack[level] = [root.val];
    }
    search(root.left, level + 1);
    search(root.right, level + 1);
  };
  search(root);
  return stack;
};
