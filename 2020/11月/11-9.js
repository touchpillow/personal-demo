// var integerReplacement = function (n) {
//   const map = {};
//   const search = (n) => {
//     if (n == 1) return 0;
//     if (map[n]) return map[n];
//     if (n % 2) {
//       const v = 1 + Math.min(search(n + 1), search(n - 1));
//       map[n] = v;
//     } else {
//       const v = search(n / 2) + 1;
//       map[n] = v;
//     }
//     return map[n];
//   };
//   search(n);
//   return map[n];
// };
// console.log(integerReplacement(7));
// var reversePrint = function (head) {
//   const res = [];
//   while (head) {
//     res.unshift(head.val);
//     head = head.val;
//   }
//   return res;
// };
// var reversePrint = function (head, res = []) {
//   if (!head) return res;
//   reversePrint(head.next, res);
//   res.push(head.val);
//   return res;
// };
var CQueue = function () {
  this.stack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.stack.length) {
    return -1;
  }
  return this.stack.shift();
};
