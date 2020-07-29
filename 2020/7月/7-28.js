// var getMinimumDifference = function (root) {
//   let pre = 0;
//   let dis = Infinity;
//   const search = (root) => {
//     if (root.left) {
//       search(root.left);
//     }
//     dis = Math.min(Math.abs(root.val - pre), dis);
//     pre = root.val;
//     if (root.right) {
//       search(root.right);
//     }
//   };
// };
// var findPairs = function (nums, k) {
//   const map = new Map();
//   for (const i of nums) {
//     map.set(i, (map.get(i) || 0) + 1);
//   }
//   if (k == 0) {
//   }
//   let res = 0;
//   for (const i of map.keys()) {
//     if (map.get(i) >= 1 && map.get(i + k) >= 1) {
//       res++;
//     }
//   }
// };
// findPairs([1, 3, 1, 5, 4]);
// var sortColors = function (nums) {
//   const map = new Map();
//   for (const i of nums) {
//     map.set(i, (map.get(i) || 0) + 1);
//   }
//   nums.splice(0, Infinity);
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0, l = map.get(i); j < l; j++) {
//       nums.push(i);
//     }
//   }
// };
var sortColors = function (nums) {
  const l = nums.length;
  let start = 0,
    end = l - 1;
  let i = 0;
  while (i < end) {
    console.log(i, end);
    if (nums[i] == 2) {
      [nums[i], nums[end]] = [nums[end], nums[i]];
      end--;
    } else if (!nums[i]) {
      [nums[i], nums[start]] = [nums[start], nums[i]];
      start++;
      i++;
    } else {
      i++;
    }
  }
  console.log(nums);
};
sortColors([2, 0, 1]);
