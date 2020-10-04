// var uniqueOccurrences = function (arr) {
//   const map = new Map();
//   for (const n of arr) {
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   return map.size === new Set([...map.values()]).size;
// };
// var minimumAbsDifference = function (arr) {
//   arr.sort((a, b) => a - b);
//   const l = arr.length;
//   const res = [];
//   let min = Infinity;
//   for (let i = 0; i < l - 1; i++) {
//     if (arr[i + 1] - arr[i] < min) {
//       res.splice(0, Infinity, [arr[i], arr[i + 1]]);
//     } else if (arr[i + 1] - arr[i] == min) {
//       res.push([arr[i], arr[i + 1]]);
//       i++;
//     }
//   }
//   return res;
// };
// var specialArray = function (nums) {
//   nums.sort((a, b) => a - b);
//   const l = nums.length;
//   const max = nums[l - 1];
//   for (let i = 0; i <= max; i++) {
//     if (i == nums.filter((item) => item >= i).length) return i;
//   }
//   return -1;
// };
// const nums = [3, 6, 7, 7, 0];
// console.log(specialArray(nums));
// var isEvenOddTree = function (root) {
//   if (!root) return true;
//   let stack = [root];
//   let level = 0;
//   while (stack.length) {
//     const temp = [];
//     const l = stack.length;
//     for (const node of stack) {
//       if (node.left) {
//         temp.push(node.left);
//       }
//       if (node.right) {
//         temp.push(node.right);
//       }
//     }
//     stack = stack.map((node) => node.val);
//     if (!stack.length) {
//       stack.splice(0, Infinity, ...temp);
//     } else {
//       if (level % 2) {
//         if (stack[0] % 2) return false;
//         for (let i = 1; i < l; i++) {
//           if (stack[i] % 2) return false;
//           if (stack[i] >= stack[i - 1]) return false;
//         }
//       } else {
//         if (!(stack[0] % 2)) return false;
//         for (let i = 1; i < l; i++) {
//           if (!(stack[i] % 2)) return false;
//           if (stack[i] <= stack[i - 1]) return false;
//         }
//       }
//     }
//     stack.splice(0, Infinity, ...temp);
//     level++;
//   }
//   return true;
// };
// const a = {
//   val: 5,
//   left: {
//     val: 4,
//     left: {
//       val: 3,
//     },
//     right: {
//       val: 3,
//     },
//   },
//   right: {
//     val: 2,
//     left: {
//       val: 7,
//     },
//   },
// };
// console.log(isEvenOddTree(a));
var visiblePoints = function (points, angle, location) {
  const res = points.filter((i) => i[1] == location[1] && i[0] == location[0]);
  points = points
    .filter((i) => {
      return i[0] !== location[0] || i[1] !== location[1];
    })
    .map((item) => {
      return (
        (Math.atan((item[1] - location[1]) / (item[0] - location[0])) * 180) /
        Math.PI
      );
    })
    .sort((a, b) => a - b);
  if (!angle) return res.length;
  let max = 0;
  for (const a of points) {
    max = Math.max(
      max,
      points.filter((i) => {
        return i >= a && i <= a + angle;
      }).length
    );
  }
};
