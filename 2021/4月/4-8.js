// var trap = function (height) {
//   const l = height.length;
//   if (l < 2) return 0;
//   let left = 0;
//   let right = l - 1;
//   let c = 0;
//   while (left < l - 1 && height[left] <= height[left + 1]) {
//     left++;
//   }
//   while (right > 0 && height[right] <= height[right - 1]) {
//     right--;
//   }
//   if (left >= right) return 0;
//   let stack = [height[left]];
//   let indexStack = [left];

//   for (let i = left + 1; i <= right; i++) {
//     const cur = height[i];

//     if (cur >= stack[0]) {
//       while (stack.length > 1) {
//         const dis = stack[0] - stack[1];
//         const length = i - indexStack[0] - 1;
//         c += dis * length;
//         stack.shift();
//         indexStack.shift();
//       }
//       stack = [cur];
//       indexStack = [i];
//     } else {
//       if (cur < stack[stack.length - 1]) {
//         stack.push(cur);
//         indexStack.push(i);
//       } else {
//         while (stack[stack.length - 1] <= cur) {
//           const pre = stack.pop();
//           indexStack.pop();
//           c +=
//             (Math.min(stack[stack.length - 1], cur) - pre) *
//             (i - 1 - indexStack[indexStack.length - 1]);
//         }
//         stack.push(cur);
//         indexStack.push(i);
//       }
//     }
//   }
//   return c;
// };
var trap = function (height) {
  const l = height.length;
  if (l < 2) return 0;
  let left = 0;
  let right = l - 1;
  let c = 0;
  while (left < l - 1 && height[left] <= height[left + 1]) {
    left++;
  }
  while (right > 0 && height[right] <= height[right - 1]) {
    right--;
  }
  if (left >= right) return 0;
  let leftMax = height[left];
  let rightMax = height[right];

  while (right > left) {
    if (leftMax <= rightMax) {
      left++;
      if (height[left] < leftMax) {
        c += leftMax - height[left];
      }
      leftMax = Math.max(height[left], leftMax);
    } else {
      right--;
      if (height[right] < rightMax) {
        c += rightMax - height[right];
      }
      rightMax = Math.max(height[right], rightMax);
    }
  }
  return c;
};
const height = [0, 1, 2, 0, 3, 0, 1, 2, 0, 0, 4, 2, 1, 2, 5, 0, 1, 2, 0, 2];
//              0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
// const height = [9, 2, 4, 0, 3, 4];
console.log(trap(height));
