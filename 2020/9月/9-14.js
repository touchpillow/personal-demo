// var findKthLargest = function (nums, k) {
//   nums.sort((a, b) => b - a);
//   return nums[k - 1];
// };
// var findKthLargest = function (nums, k) {
//   const search = (nums, lefL = 0) => {
//     const l = nums.length;
//     if (l < 2) return nums;
//     const left = [];
//     const right = [];
//     const middle = ~~(l / 2);
//     for (let i = 0; i < l; i++) {
//       if (i == middle) continue;
//       if (nums[i] >= nums[middle]) {
//         left.push(nums[i]);
//       } else {
//         right.push(nums[i]);
//       }
//     }
//     if (left.length + lefL == k - 1) return nums[middle];
//     if (left.length + lefL > k - 1) return search(left, lefL);
//     return search(right, lefL + left.length + 1);
//   };
//   return search(nums);
// };
// const a = [3, 2, 3, 1, 2, 4, 5, 5, 6],
//   k = 4;
// console.log(findKthLargest(a, k));
// var isUnivalTree = function (root) {
//   if (!root) return true;
//   const pre = root.val;
//   const search = (root) => {
//     if (!root) return true;
//     if (root.val !== pre) return false;
//     return search(root.left) && search(root.right);
//   };
//   return search(root);
// };
// var isUnivalTree = function (root) {
//   if (!root) return true;
//   const v = root.val;
//   const stack = [root];
//   while (stack.length) {
//     const item = stack.pop();
//     if (item.val !== v) return false;
//     if (item.left) {
//       stack.push(item.left);
//     }
//     if (item.right) {
//       stack.push(item.right);
//     }
//   }
//   return true;
// };
var powerfulIntegers = function (x, y, bound) {
  if (x == 1 && y == 1) return [2];
  const set = new Set();
  let i = 0;
  let j = 0;
  if (x == 1 || y == 1) {
    const m = x == 1 ? y : x;
    while (Math.pow(m, i) <= bound - 1) {
      set.add(Math.pow(m, i) + 1);

      i++;
    }
  } else {
    while (Math.pow(x, i) <= bound - 1) {
      j = 0;
      const v = Math.pow(x, i);

      while (v + Math.pow(y, j) <= bound) {
        set.add(Math.pow(y, j) + v);
        j++;
      }
      i++;
    }
  }

  return [...set];
};
