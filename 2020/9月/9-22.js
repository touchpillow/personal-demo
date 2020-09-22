// var majorityElement = function (nums) {
//   const l = nums.length;
//   if (l < 3) return nums;
//   let a = nums[0],
//     av = 1;
//   let b,
//     bv = 0;
//   let index;
//   for (let i = 1; i < l; i++) {
//     if (nums[i] !== a) {
//       b = nums[i];
//       bv = 1;
//       index = i + 1;
//       break;
//     } else {
//       av++;
//     }
//   }
//   if (!bv) return [a];
//   for (let i = index; i < l; i++) {
//     if (av && bv) {
//       if (nums[i] == a) {
//         av++;
//       } else if (nums[i] == b) {
//         bv++;
//       } else {
//         av--;
//         bv--;
//       }
//     } else if (!av) {
//       if (nums[i] == b) {
//         bv++;
//       } else {
//         a = nums[i];
//         av = 1;
//       }
//     } else {
//       if (nums[i] == a) {
//         av++;
//       } else {
//         b = nums[i];
//         bv = 1;
//       }
//     }
//     console.log(a, av, b, bv);
//   }
//   let ac = 0;
//   let bc = 0;
//   for (const n of nums) {
//     if (n == a) ac++;
//     if (n == b) bc++;
//   }
//   console.log(a, b);
//   console.log(av, bv);
//   if (ac > l / 3 && bc > l / 3) return [a, b];
//   if (ac > l / 3) return [a];
//   if (bc > l / 3) return [b];
//   return [];
// };
// const a = [1, 2, 2, 3, 3, 4, 4, 5, 1, 1, 1, 1];

// console.log(majorityElement(a));
// var sumRootToLeaf = function (root) {
//   if (!root) return 0;
//   const mi = Math.pow(10, 9) + 7;
//   const stack = [
//     {
//       v: "",
//       node: root,
//     },
//   ];
//   const res = [];
//   while (stack.length) {
//     const item = stack.pop();
//     if (!item.node) continue;
//     if (!item.node.left && !item.node.right) {
//       res.push(item.v + item.node.val);
//     } else {
//       stack.push({
//         v: item.v + item.node.val,
//         node: item.node.left,
//       });
//       stack.push({
//         v: item.v + item.node.val,
//         node: item.node.right,
//       });
//     }
//   }
//   return res.reduce((res, item) => {
//     res = (res + Number.parseInt(item, 2)) % mi;
//     return res;
//   }, 0);
// };
var divisorGame = function (N) {};
