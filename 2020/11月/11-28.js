// /**
//  * Initialize your data structure here.
//  */
// var MyQueue = function () {
//   this.stack1 = null;
//   this.stack2 = null;
// };

// /**
//  * Push element x to the back of queue.
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function (x) {
//   while (this.stack2) {
//     const next = this.stack2.next;
//     this.stack2.next = this.stack1;
//     this.stack1 = this.stack2;
//     this.stack2 = next;
//   }
//   const node = {
//     val: x,
//     next: this.stack1,
//   };
//   this.stack1 = node;
// };

// /**
//  * Removes the element from in front of queue and returns that element.
//  * @return {number}
//  */
// MyQueue.prototype.pop = function () {
//   while (this.stack1) {
//     const next = this.stack1.next;
//     this.stack1.next = this.stack2;
//     this.stack2 = this.stack1;
//     this.stack1 = next;
//   }
//   const node = this.stack2;
//   this.stack2 = this.stack2.next;
//   return node.val;
// };

// /**
//  * Get the front element.
//  * @return {number}
//  */
// MyQueue.prototype.peek = function () {
//   while (this.stack1) {
//     const next = this.stack1.next;
//     this.stack1.next = this.stack2;
//     this.stack2 = this.stack1;
//     this.stack1 = next;
//   }
//   return this.stack2.val;
// };

// /**
//  * Returns whether the queue is empty.
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function () {
//   return !this.stack1 && !this.stack2;
// };
// const reverse = (root, pre) => {
//   if (!root) return pre;
//   const next = root.next;
//   root.next = pre;
//   return reverse(next, root);
// };
// var addTwoNumbers = function (l1, l2) {
//   if (!l1) return l2;
//   if (!l2) return l1;
//   l1 = reverse(l1);
//   l2 = reverse(l2);
//   const res = l1;
//   let v = 0;
//   while (l1 || l2) {
//     if (!l1.next) {
//       l1.next = l2.next;
//       l2.next = null;
//     }
//     const temp = l1.val + l2?.val ?? 0;
//     v = temp / 10;
//     l1.val = temp % 10;
//     l1 = l1.next;
//     l2 = l2.next;
//   }
//   return reverse(l1);
// };
var majorityElement = function (nums) {
  const l = nums.length;
  let cur,
    c = 0;
  for (const n of nums) {
    if (!c) {
      c++;
      cur = n;
    } else if (cur == n) {
      c++;
    } else {
      c--;
    }
  }
  c = 0;
  for (const n of nums) {
    if (n == cur) c++;
  }
  return c > l / 2 ? cur : -1;
};
