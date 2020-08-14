// var longestUnivaluePath = function (root) {
//   let lengt = 0;
//   const longestUnivaluePathAA = (root) => {
//     if (!root) return 0;
//     if (!root.left && !root.right) return 1;
//     let left = longestUnivaluePathAA(root.left);
//     let right = longestUnivaluePathAA(root.right);
//     if (!root.left || root.left.val !== root.val) left = 0;
//     if (!root.right || root.right.val !== root.val) right = 0;

//     length = Math.max(length, 1 + left + right);
//     return 1 + left + right;
//   };
//   return longestUnivaluePathAA(root);
// };
// var GetImportance = function (employees, id) {
//   const map = new Map();
//   const idStack = [id];
//   let sum = 0;
//   for (const i of employees) {
//     map.set(i[0], i);
//   }
//   while (idStack.length) {
//     const id = idStack.shift();
//     const emplo = map.get(id);
//     sum += emplo[1];
//     idStack.push(...emplo[2]);
//   }
//   return sum;
// };
// var a = [
//   [1, 5, [2, 3]],
//   [2, 3, []],
//   [3, 3, []],
// ];
// console.log(GetImportance(a, 1));
var flatten = function (root) {
  let head;
  const search = (root) => {
    if (!root) return;
    const right = root.right;
    if (root.left) {
      root.right = search(root.left);
      root.left = null;
    } else {
      head = root;
    }
    if (right) {
      head.right = search(right);
    }
    return root;
  };
  return search(root);
};
var a = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
};
console.log(flatten(a));
