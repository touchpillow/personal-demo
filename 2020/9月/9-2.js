// var findPeakElement = function (nums) {
//   const l = nums.length;
//   if (l < 2) return 0;
//   if (nums[0] > nums[1]) return 0;
//   let left = 0;
//   let right = l - 1;
//   if (nums[right] > nums[right - 1]) return right;
//   while (true) {
//     const middle = ~~((left + right) / 2);
//     const dirLeft = nums[middle] > nums[middle - 1];
//     const dirRight = nums[middle] > nums[middle + 1];
//     if (dirLeft && dirRight) return middle;
//     if (!dirRight) {
//       left = middle;
//     } else {
//       right = middle;
//     }
//   }
// };
// var findPeakElement = function (nums) {
//   const l = nums.length;
//   for (let i = 0; i < l; i++) {
//     if (
//       nums[i] > (nums[i - 1] == undefined ? -Infinity : nums[i - 1]) &&
//       nums[i] > (nums[i + 1] == undefined ? -Infinity : nums[i + 1])
//     ) {
//       return i;
//     }
//   }
// };
// var binaryGap = function (N) {
//   const s = N.toString(2);
//   let length = s.length;
//   let max = 0;
//   let left = 0;
//   for (let i = 0; i < length; i++) {
//     if (s[i] == "1") {
//       max = max < i - left ? i - left : max;
//       left = i;
//     }
//   }
//   return max;
// };
// const a = 6;

// console.log(binaryGap(a));
// var leafSimilar = function (root1, root2) {
//   const leaf = [];
//   let flag = true;
//   const search = (root, type) => {
//     if (!flag) return;
//     if (!root) {
//       return;
//     }
//     if (!root.left && !root.right) {
//       if (type) {
//         leaf.push(root.val);
//       } else {
//         flag = leaf.shift() === root.val;
//       }
//       return;
//     }
//     search(root.left, type);
//     search(root.right, type);
//   };
//   search(root1, true);
//   search(root2, false);
//   return flag;
// };
// var leafSimilar = function (root1, root2) {
//   if (!root1 || !root2) return root1 === root2;
//   const leaf = [];
//   const stack = [root1];
//   const stack2 = [root2];
//   while (stack.length) {
//     const item = stack.pop();
//     if (!item) continue;
//     if (!item.left && !root1.right) {
//       leaf.push(item.val);
//     } else {
//       stack.push(item.right);
//       stack.push(item.left);
//     }
//   }
//   while (stack2.length) {
//     const item = stack2.pop();
//     if (!item) continue;
//     if (!item.left && !root1.right) {
//       if (!leaf.length) return false;
//       if (leaf.shift() !== item.val) return false;
//     } else {
//       stack2.push(item.right);
//       stack2.push(item.left);
//     }
//   }
//   return true;
// };
var leafSimilar = function (root1, root2) {
  let s1 = "",
    s2 = "";
  const search = (root, type) => {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      if (type) {
        s1 = `${s1}-${root.val}`;
      } else {
        s2 = `${s2}-${root.val}`;
      }
      return;
    }
    search(root.left, type);
    search(root.right, type);
  };
  search(root1, true);
  search(root2, false);
  return s1 == s2;
};
