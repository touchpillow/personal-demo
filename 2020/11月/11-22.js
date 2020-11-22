function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}
var flatten = function (head) {
  if (!head) return null;
  const stack = [head.child, head.next];
  head.next = null;
  head.child = null;
  head.child = undefined;
  let cur = head;
  while (stack.length) {
    const item = stack.shift();
    if (!item) continue;
    stack.unshift(item.child, item.next);
    cur.next = item;
    item.prev = cur;
    item.child = null;
    item.next = null;
    cur = item;
  }
  return head;
};
const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(3);
const a4 = new Node(4);
a1.next = a2;
a2.prev = a1;
a2.child = a3;
a2.next = a4;
a4.prev = a3;
console.log(flatten(a1));
