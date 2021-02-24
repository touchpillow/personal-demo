// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
// var allPossibleFBT = function (N) {
//   if (!(N % 2)) return [];
//   const map = new Map();
//   map.set(1, [new TreeNode(0)]);
//   const getNode = (n) => {
//     if (map.has(n)) return JSON.parse(JSON.stringify(map.get(n)));
//     if (n === 1) {
//       return;
//     } else {
//       const res = [];
//       for (let i = 1; i <= n - 2; i += 2) {
//         const left = getNode(i);
//         const right = getNode(n - 1 - i);
//         const l1 = left.length;
//         const l2 = right.length;
//         for (let i = 0; i < l1; i++) {
//           for (let j = 0; j < l2; j++) {
//             const root = new TreeNode(0);
//             root.left = JSON.parse(JSON.stringify(left[i]));
//             root.right = JSON.parse(JSON.stringify(right[j]));
//             res.push(root);
//           }
//         }
//       }
//       map.set(n, res);
//       return res;
//     }
//   };
//   return getNode(N);
// };
// console.log(allPossibleFBT(7));
var subarrayBitwiseORs = function (arr) {
  const set1 = new Set();
  const set2 = new Set();
  set2.add(0);
  for (const x of arr) {
    const set3 = new Set();
    for (const y of set2) {
      set3.add(x | y);
    }
    set3.add(x);
    set2 = set3;
    for (const s of set2) {
      set1.add(s);
    }
  }
  return set1.size;
};
