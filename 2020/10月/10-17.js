// var sortByBits = function (arr) {
//   const map = new Map();
//   arr.sort((a, b) => {
//     const l1 = getL(a);
//     const l2 = getL(b);
//     if (l1 == l2) return a - b;
//     return l1 - l2;
//   });
//   function getL(a) {
//     if (map.get(a)) return map.get(a);
//     const l = a
//       .toString(2)
//       .split("")
//       .filter((i) => i == 1).length;
//     map.set(a, l);
//     return l;
//   }
//   return arr;
// };
// var daysBetweenDates = function (date1, date2) {
//   const mod = 3600 * 24 * 1000;
//   return (new Date(date1).getTime() - new Date(date2).getTime()) / mod;
// };
// var postorderTraversal = function (root) {
//   const res = [];
//   const search = (root) => {
//     if (!root) return;
//     search(root.left);
//     search(root.right);
//     res.push(root.val);
//   };
//   return res;
// };
// var postorderTraversal = function (root) {
//   const stack = [root];
//   const res = [];
//   while (stack.length) {
//     const item = stack.pop();
//     if (!item) continue;
//     if (item.left || item.right) {
//       const left = item.left;
//       const right = item.right;
//       item.left = null;
//       item.right = null;
//       stack.push(item);
//       stack.push(right);
//       stack.push(left);
//     } else {
//       res.push(item.val);
//     }
//   }
//   return res;
// };
