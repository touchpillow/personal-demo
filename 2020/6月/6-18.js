var minDepth = function (root) {
  if (!node) return 0;
  var res = { v: Infinity };
  min(root.left, res);
  return res.v;
};
var min = (node, res, currD = 0) => {
  currD++;
  if (currD >= res.v) {
    return;
  }
  if (!node.left && !node.right && currD < res.v) {
    res.v = currD;
  }
  if (node.left) min(node.left, res, currD);
  if (node.right) min(node.right, res, currD);
};
// var minDepth = function (root) {
//   if (!root) return 0;
//   let stack = [root];
//   let res = 1,
//     item;
//   while (true) {
//     let l = stack.length;
//     for (let i = 0; i < l; i++) {
//       item = stack.shift();
//       if (!item.left && !item.right) {
//         return res;
//       } else {
//         if (item.left) stack.push(item.left);
//         if (item.right) stack.push(item.right);
//       }
//     }
//     res++;
//   }
// };
var hasPS = (node, sum, currtS = 0) => {
  if (!node) return false;
  currtS += node.val;
  if (!node.left && !node.right) {
    return currtS === sum;
  }
  return hasPS(node.left, sum, currtS) || hasPS(node.right, sum, currtS);
};
var hasPathSum = function (root, sum) {
  if (!root) return false;
  return hasPS(root, sum);
};
var hasPathSum = function (root, sum) {
  if (!root) return false;
  let stack = [root];
  while (stack.length) {
    let l = stack.length;
    for (let i = 0; i < l; i++) {
      item = stack.shift();
      sum -= item.val;
      if (!item.left && !item.right && !sum) {
        return true;
      } else {
        if (item.left) stack.push(item.left);
        if (item.right) stack.push(item.right);
      }
    }
  }
  return false;
};
