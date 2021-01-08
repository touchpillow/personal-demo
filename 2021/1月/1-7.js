// const getDep = (root) => {
//   if (!root) return 0;
//   return Math.max(getDep(root.left), getDep(root.right)) + 1;
// };
// var widthOfBinaryTree = function (root) {
//   if (!root) return 0;
//   const height = [];

//   const search = (root, pre = 0, level = 0) => {
//     if (!root) return;
//     if (!height[level]) {
//       height[level] = [pre, 0, 0];
//     } else {
//       height[level][1] = Math.min(pre - height[level][0], height[level][1]);
//       height[level][2] = Math.max(pre - height[level][0], height[level][2]);
//     }
//     search(root.left, (pre - height[level][0]) * 2, level + 1);
//     search(root.right, (pre - height[level][0]) * 2 + 1, level + 1);
//   };
//   search(root);
//   return Math.max(...height.map((item) => item[2] - item[1])) + 1;
// };

var isPossible = function (nums) {
  const l = nums.length;
  if (l < 3) return false;
  const map = new Map();
  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  console.log(map);
  let pre = nums[0];
  let curv = nums[0];
  let curLength = 0;
  while (map.size) {
    while (!map.has(pre)) {
      pre++;
    }
    curv = pre;
    curLength = 0;
    let flag = false;
    while (true) {
      if (curLength < 3 && !map.get(curv)) {
        console.log(curLength, curv);
        return false;
      } else if (curLength >= 3 && flag && map.get(curv) >= 2) {
        curLength++;
        map.set(curv, map.get(curv) - 1);

        curv++;
      } else if (curLength >= 3 && flag && (map.get(curv) || 0) < 2) {
        break;
      } else {
        if (!map.has(curv)) break;
        map.set(curv, map.get(curv) - 1);
        if (map.get(curv) === 0) {
          map.delete(curv);
        } else {
          flag = true;
        }
        curLength++;
        curv++;
      }
    }
  }
  return true;
};
// const nums = [1, 2, 3, 4, 5, 6];
console.log(isPossible(nums));
