// var minOperations = function (logs) {
//   const stack = [];
//   for (const n of logs) {
//     if (n == "../") {
//       stack.pop();
//     } else if (n == "./") {
//     } else {
//       stack.push(n);
//     }
//   }
//   return stack.length;
// };
// var maxDepth = function (s) {
//   let left = 0;
//   let max = 0;
//   for (const n of s) {
//     if (n == "(") {
//       left++;
//     } else if (n == ")") {
//       left--;
//     }
//     max = Math.max(left, max);
//   }
//   return max;
// };
// var Solution = function (head) {
//   this.head = head;
//   let l = 0;
//   while (head) {
//     head = head.next;
//     l++;
//   }
//   this.length = l;
// };

// /**
//  * Returns a random node's value.
//  * @return {number}
//  */
// Solution.prototype.getRandom = function () {
//   if (!this.length) return null;
//   let node = this.head;
//   let index = ~~(Math.random() * this.length) + 1;
//   while (--index) {}
//   return node.val;
// };
var Solution = function (head) {
  this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  if (!this.head) return null;
  let v = this.head.val;
  let index = 1;
  let node = this.head.next;
  while (node) {
    index++;
    if (!~~(Math.random() * index)) {
      v = node.val;
    }
    node = node.next;
  }
  return v;
};
