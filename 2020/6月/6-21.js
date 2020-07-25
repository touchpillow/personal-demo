// var hasCycle = function (head) {
//   var map = new Map();
//   while (head) {
//     if (map.has(head)) return true;
//     map.set(head, 111);
//     head = head.next;
//   }
//   return false;
// };
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.node = null;
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.node = {
    val: x,
    next: this.node,
  };
  if (!this.stack.length) {
    this.stack.push(x);
    return;
  }
  const i = this.stack.findIndex((i) => i >= x);
  this.stack.splice(i, 0, x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (!this.node) return;
  const x = this.node.val;
  this.node = this.node.next;
  const i = this.stack.findIndex((i) => i == x);
  this.stack.splice(i, 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (!this.node) return null;
  return this.node.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (!this.node) return null;
  return this.stack[0];
};

var s = new MinStack();
s.push(-2);
s.push(0);
s.push(-3);
console.log(s.getMin());
console.log(s.top());
s.pop();
console.log(s.top());
console.log(s.getMin());
