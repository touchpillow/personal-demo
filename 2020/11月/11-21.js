// var isStraight = function (nums) {
//   nums.sort((a, b) => a - b);
//   let c = 0;
//   for (const n of nums) {
//     if (!n) c++;
//   }
//   nums = nums.slice(c);
//   const l = nums.length;
//   for (let i = 1; i < l; i++) {
//     if (nums[i] == nums[i - 1]) return false;
//     c -= nums[i] - nums[i - 1] - 1;
//   }
//   return c >= 0;
// };
// const a = [0, 0, 1, 2, 5];
// console.log(isStraight(a));
// var lastRemaining = function (n, m) {
//   const list = new Array(n);
//   for (let i = 0; i < n; i++) {
//     list[i] = i;
//   }
//   let index = m - 1;
//   let l = n;
//   let c = 0;
//   while (list.length > 1) {
//     if (index >= l) {
//       index -= l;
//       l = list.length;
//       index %= l;
//       c = 0;
//     }
//     console.log(list, index, c);
//     list.splice(index - c, 1);
//     c++;
//     index += m;
//   }
//   return list[0];
// };
// console.log(lastRemaining(10, 17));
// var levelOrder = function (root, level = 0, res = []) {
//   if (!root) return res;
//   if (res[level]) {
//     res[level].push(root.val);
//   } else {
//     res[level] = [root.val];
//   }
//   return root.children.reduce(
//     (res, item) => levelOrder(item, level + 1, res),
//     res
//   );
// };
var levelOrder = function (root) {
  const res = [];
  if (!root) return res;
  let stack = [root];
  while (stack.length) {
    res.push(stack.map((item) => item.val));
    stack = stack.reduce((res, item) => {
      res.push(...item.children);
      return res;
    }, []);
  }
  return res;
};
