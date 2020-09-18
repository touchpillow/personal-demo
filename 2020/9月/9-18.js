// var countNodes = function (root) {
//   let count = 0;
//   const search = (root) => {
//     if (!root) return;
//     count++;
//     search(root.left);
//     search(root.right);
//   };
//   return count;
// };
// var countNodes = function (root) {
//   if (!root) return 0;
//   const getDep = (root) => {
//     if (!root) return 0;
//     return 1 + getDep(root.left);
//   };
//   if (!root) return 0;

//   const leftDeep = getDep(root.left);
//   const rightDeep = getDep(root.right);
//   console.log(leftDeep, rightDeep);
//   if (leftDeep === rightDeep) {
//     return Math.pow(2, leftDeep) + countNodes(root.right);
//   } else {
//     return Math.pow(2, rightDeep) + countNodes(root.left);
//   }
// };
// const a = {
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 3,
//     },
//     right: {
//       val: 4,
//     },
//   },
//   right: {
//     val: 5,
//     left: {
//       val: 6,
//     },
//   },
// };
// console.log(countNodes(a));
var commonChars = function (A) {
  const res = [];
  const l = A.length;
  if (!l) return res;
  let map = new Map();
  for (const s of A[0]) {
    map.set(s, (map.get(s) || 0) + 1);
  }
  for (let i = 1; i < l; i++) {
    const curMap = new Map();
    for (const s of A[i]) {
      curMap.set(s, (curMap.get(s) || 0) + 1);
    }
    const keys = map.keys();
    const temp = new Map();
    for (const key of keys) {
      if (!curMap.has(key)) continue;
      temp.set(key, Math.min(map.get(key), curMap.get(key)));
    }
    map = temp;
  }
  let res = "";
  for (const key of map) {
    res += key.repeat(map.get(key));
  }
  return res.split("");
};
