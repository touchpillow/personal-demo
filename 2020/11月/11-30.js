// var balance = function (root) {
//   return isBalanced(root) !== -1;
// };
// var isBalanced = function (root) {
//   if (!root) return 0;
//   const left = balance(root.left);
//   const right = balance(root.right);
//   if (left < 0 || right < 0 || Math.abs(left - right) > 1) {
//     return -1;
//   }
//   return Math.max(left, right);
// };
// var insertBits = function (N, M, i, j) {};
// var reverseBits = function (num) {
//   num = num.toString(2).pa;
//   const l = num.length;
//   console.log(num);
//   let max = 0;
//   let left = 0;
//   let right = 0;
//   let c = 0;
//   for (let i = 0; i < l; i++) {
//     if (!c && num[i] == "1") {
//       left++;
//     } else if (!c && num[i] == "0") {
//       c++;
//     } else if (c && num[i] == "1") {
//       right++;
//     } else {
//       max = Math.max(left + right + 1, max);
//       left = right;
//       right = 0;
//       c = 1;
//     }
//   }

//   return Math.max(max, left + right + 1);
// };
// // console.log(reverseBits(1096063));
// var reverseBits2 = function (num) {
//   let s = num.toString(2);
//   if (s.indexOf("0") === -1) return s.length + 1;
//   let list = s.split("0");
//   let max = 0;
//   for (let i = 0; i < list.length - 1; i++) {
//     let len = (list[i] + list[i + 1]).length;
//     max = Math.max(max, len);
//   }
//   return max + 1;
// };
// console.log(reverseBits2(3));
const findLeft = (root) => {
  if (!root.left) return root;
  return findLeft(root.left);
};
var deleteNode = function (root, key) {
  if (root.val == val) {
    if (!root.left || !root.right) return rootleft || root.right;
    const newRoot = root.right;
    const leaf = findLeft(newRoot);
    leaf.left = root.left;
    return newRoot;
  }
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    root.left = deleteNode(root.left, key);
  }
  return root;
};
