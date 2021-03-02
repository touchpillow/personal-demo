// var CBTInserter = function (root) {
//   const arr = [root];
//   const all = [root];
//   while (arr.length) {
//     const node = arr.shift();
//     if (node.left && node.right) all.shift();
//     if (node.left) {
//       arr.push(node.left);
//       all.push(node.left);
//     }
//     if (node.right) {
//       arr.push(node.right);
//       all.push(node.right);
//     }
//   }
//   this.root = root;
//   this.all = all;
// };

// /**
//  * @param {number} v
//  * @return {number}
//  */
// CBTInserter.prototype.insert = function (v) {
//   var node = this.all[0];
//   var mynode = new TreeNode(v);
//   if (node.left == null) {
//     node.left = mynode;
//     this.all.push(mynode);
//   } else {
//     node.right = mynode;
//     this.all.shift();
//     this.all.push(mynode);
//   }
//   return node.val;
// };

// /**
//  * @return {TreeNode}
//  */
// CBTInserter.prototype.get_root = function () {
//   return this.root;
// };
var minAddToMakeValid = function (S) {
  let left = 0;
  let right = 0;
  let c = 0;
  for (const s of S) {
    if (s === "(") {
      if (right > left) {
        c += right - left;
        right = 0;
        left = 0;
      }
      left++;
    } else {
      right++;
    }
  }
  c += Math.abs(left - right);
  return c;
};
