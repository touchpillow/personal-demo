// var sumOfLeftLeaves = function (root) {
//   if (!root) return 0;
//   let res = 0;
//   const stack = [root];
//   while (stack.length) {
//     const item = stack.pop();
//     if (item.left) {
//       if (!item.left.left && !item.left.right) {
//         res += item.left.val;
//       } else {
//         stack.push(item.left);
//       }
//     }
//     if (item.right) {
//       stack.push(item.right);
//     }
//   }
//   return res;
// };
// var longestPalindrome = function (s) {
//   const map = new Map();
//   for (const i of s) {
//     map.set(i, (map.get(i) || 0) + 1);
//   }
//   let res = 0;
//   let flag = false;
//   for (const i of map.values()) {
//     if (i % 2) {
//       res += i - 1;
//       if (!flag) {
//         res += 1;
//         flag = true;
//       }
//     } else {
//       res += i;
//     }
//   }
//   return res;
// };
// var sumOfLeftLeaves = function (root) {
//   if (!root) return 0;
//   let val = 0;
//   if (item.left) {
//     if (!item.left.left && !item.left.right) {
//       val = 1;
//     }
//   }
//   return val + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
// };
var getS = (s) => {
  return [...s].sort().join("");
};
var groupAnagrams = function (strs) {
  const map = new Map();
  for (const i of strs) {
    const as = getS(i);
    const a = map.get(as);
    if (!a) {
      map.set(as, [i]);
    } else {
      a.push(i);
    }
  }
  return [...map.values()];
};
