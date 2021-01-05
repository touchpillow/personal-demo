// var findDuplicateSubtrees = function (root) {
//   const set = new Set();
//   const map = new Map();
//   const res = [];
//   const search = (root) => {
//     if (!root) return "";
//     const left = search(root.left);
//     const right = search(root.right);
//     const cur = `${left}-${root.val}-${right}`;
//     if (set.has(cur) && !map.get(cur)) {
//       res.push(root);
//       map.set(cur, true);
//     } else {
//       set.add(cur);
//     }
//     return cur;
//   };
//   search(root);
//   return res;
// };
var constructMaximumBinaryTree = function (nums) {
  const l = nums.length;
  const map = nums.reduce((map, item, index) => {
    map[item] = index;
    return map;
  }, {});
  const build = (left, right) => {
    if (left > right) return null;
    if (left === right) return new TreeNode(nums[left]);
    const max = Math.max(...nums.slice(left, right + 1));
    const index = map[max];
    const leftNode = build(left, index - 1);
    const rightNode = build(index + 1, right);
    const root = new TreeNode(nums[index]);
    root.left = leftNode;
    root.right = rightNode;
    return root;
  };
  return build(0, l - 1);
};
