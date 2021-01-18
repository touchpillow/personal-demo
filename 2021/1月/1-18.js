// var splitListToParts = function (root, k) {
//   let head = root;
//   let l = 0;
//   while (head) {
//     l++;
//     head = head.next;
//   }
//   let stack = [];
//   while (k > 0) {
//     if (!l) {
//       stack.push(null);
//       k--;
//       continue;
//     }
//     let cur = Math.ceil(l / k);
//     const pre = root;
//     l--;
//     while (--cur && l) {
//       root = root.next;
//       l--;
//     }
//     const next = root.next;
//     root.next = null;
//     stack.push(pre);
//     root = next;
//     k--;
//   }
//   return stack;
// };
// const list = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: null,
//     },
//   },
// };
// console.log(splitListToParts(list, 5));
var MyCalendar = function () {
  this.stack = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (
    this.stack.some((item) => {
      return item[0] < end && item[1] > start;
    })
  ) {
    return false;
  }
  this.stack.push([start, end]);
};
