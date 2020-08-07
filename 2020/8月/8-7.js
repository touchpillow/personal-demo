// var maximumProduct = function (nums) {
//   let min1 = 0;
//   let min2 = 0;
//   let max1 = 0;
//   let max2 = 0;
//   let max3 = 0;
//   for (const n of nums) {
//     if (n < 0) {
//       if (n <= min1) {
//         min2 = min1;
//         min1 = n;
//       } else if (n <= min2) {
//         min2 = n;
//       }
//     } else {
//       if (n >= max3) {
//         max1 = max2;
//         max2 = max3;
//         max3 = n;
//       } else if (n >= max2) {
//         max1 = max2;
//         max2 = n;
//       } else if (n >= max1) {
//         max1 = n;
//       }
//     }
//   }
//   return max3 * Math.max(min1 * min2, max1 * max2);
// };
// var judgeSquareSum = function (c) {
//   const middle = Math.sqrt(c, 2);
//   console.log(middle);
//   //   for (let i = middle; i; i--) {
//   //     if (Number.isInteger(Math.sqrt(c - i * i, 2))) return true;
//   //   }
//   return false;
// };
// judgeSquareSum(5);
// var inorderTraversal = function (root) {
//   const res = [];
//   const stack = [root];
//   while (stack.length) {
//     const item = stack.pop();
//     if (!item) continue;

//     if (item.right) {
//       stack.push(item.right);
//       item.right = null;
//     }
//     if (!item.left && !item.right) {
//       res.push(item.val);
//     } else {
//       const left = item.left;
//       item.left = null;
//       stack.push(item);
//       stack.push(left);
//     }
//   }
//   return res;
// };
var generateTrees = function (n) {
  const res = [];
  const generateTreesAA = (min, max) => {
    if (min > max) return [null];
    if (min === max) return [new TreeNode(left)];
    const temp = [];
    for (let i = min; i <= max; i++) {
      const left = generateTreesAA(min, i - 1);
      const right = generateTreesAA(i + 1, max);

      for (let node1 of left) {
        for (let node2 of right) {
          let node = new TreeNode(i);
          node.left = node1;
          node.right = node2;
          temp.push(node);
        }
      }
    }
    return temp;
  };

  return generateTreesAA(1, n);
};
