// var preorder = function (root) {
//   const res = [];
//   const search = (root) => {
//     if (!root) return;
//     res.push(root.val);
//     if (root.children) {
//       root.children.forEach(root);
//     }
//   };
//   search(root);
//   return res;
// };
// var preorder = function (root) {
//   const stack = [root];
//   const res = [];
//   while (stack.length) {
//     const item = stack.pop();
//     if (!item) continue;
//     res.push(item.val);
//     if (item.children) {
//       for (let l = item.children.length, i = l - 1; i >= 0; i--) {
//         stack.push(item.children[i]);
//       }
//     }
//   }
//   return res;
// };
// var postorder = function (root) {
//   const res = [];
//   const search = (root) => {
//     if (!root) return;
//     if (root.children) {
//       root.children.forEach(root);
//     }
//     res.push(root.val);
//   };
//   search(root);
//   return res;
// };
// var postorder = function (root) {
//   const stack = [root];
//   const res = [];
//   while (stack.length) {
//     const item = stack.pop();
//     if (!item) continue;
//     res.unshift(item.val);
//     if (item.children && item.children.length) {
//       stack.push(...children);
//     }
//   }
//   return res;
// };
// var grayCode = function (n) {
//   if (!n) return [0];
// };
var subsetsWithDup = function (nums) {
  const res = [];
  const temp = [];
  nums.sort((a, b) => a - b);
  const l = nums.length;
  const search = (temp, start) => {
    res.push(temp.slice(0));
    let v;
    if (temp.length) return;
    for (let i = start; i < l; i++) {
      if (!temp.length) {
        console.log(i, nums[i], v, l);
      }
      if (nums[i] === v) return;
      const tv = temp.slice(0);
      tv.push(nums[i]);
      v = nums[i];
      search(tv, i + 1);
    }
  };
  search(temp, 0);
  return res;
};
const a = [1, 1, 2, 2];
console.log(subsetsWithDup(a));
