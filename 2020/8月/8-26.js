// var preorderTraversal = function (root) {
//   const res = [];
//   const search = (root) => {
//     if (!root) return;
//     res.push(root.val);
//     search(root.left);
//     search(root.right);
//   };
//   search(root);
//   return res;
// };
// var preorderTraversal = function (root) {
//   const stack = [root];
//   const res = [];
//   while (stack.length) {
//     const item = stack.shift();
//     if (!item) continue;
//     res.push(item.val);
//     stack.push(item.right);
//     stack.push(item.left);
//   }
//   return res;
// };
// var subdomainVisits = function (cpdomains) {
//   const map = new Map();
//   for (const s of cpdomains) {
//     const { 0: count, 1: domin } = cpdomains.split(" ");
//     const l = domin.length;
//     let index = 0;
//     while (index < l) {
//       map.set(domin.slice(index), (map.get(domin.slice(index)) || 0) + +count);
//       while (domin[index] !== "." && index < l) {
//         index++;
//       }
//       index++;
//     }
//   }
//   const res = [];
//   for (const key of map.keys()) {
//     res.push(`${map.get(key)} ${key}`);
//   }
//   return res;
// };
// var largestTriangleArea = function (points) {

// };
var mostCommonWord = function (paragraph, banned) {
  const words = paragraph
    .replace(/[!?',;.]/g, " ")
    .toLowerCase()
    .split(" ")
    .filter((i) => i);
  const map = new Map();
  let res;
  let length = 0;
  for (const s of words) {
    if (banned.includes(s)) continue;
    const count = (map.get(s) || 0) + 1;
    if (count > length) {
      res = s;
      length = count;
    }
    map.set(s, count);
  }
  return res;
};
