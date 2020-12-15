// var findFrequentTreeSum = function (root) {
//   const map = new Map();
//   const search = (root) => {
//     if (!root) return 0;
//     const left = search(root.left);
//     const right = search(root.right);
//     const v = left + right + root.val;
//     map.set(v, (map.get(v) || 0) + 1);
//     return v;
//   };
//   search(root);
//   const res = [];
//   let c = 0;
//   for (const key of map.keys()) {
//     if (map.get(key) > c) {
//       c = map.get(key);
//       res.splice(0, Infinity, key);
//     } else if (map.get(key) === c) {
//       res.push(key);
//     }
//   }
//   return res;
// };
var findBottomLeftValue = function (root) {
  let preLevel = -1;
  let v;
  const search = (root, level = 0) => {
    if (!root) return;
    if (level > preLevel) {
      v = root.val;
      preLevel = level;
    }
    search(root.left, level + 1);
    search(root.right, level + 1);
  };
  search(root);
  return v;
};
