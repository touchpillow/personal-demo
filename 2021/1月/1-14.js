// var insertIntoBST = function (root, val) {
//   const search = (root) => {
//     if (!root) return new TreeNode(val);
//     if (root.val > val) {
//       root.left = search(root.left);
//     } else {
//       root.right = search(root.right);
//     }
//     return root;
//   };
//   return search(root);
// };
var MyLinkedList = function () {
  this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let pre = this.head;
  while (index > 0) {
    if (!pre) return -1;
    pre = pre.next;
    index--;
  }
  return !pre ? -1 : pre.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const cur = {
    val,
  };
  cur.next = this.head;
  this.head = cur;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const curNode = { val };
  if (!this.head) {
    this.head = curNode;
    return;
  }
  let cur = this.head;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = curNode;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index <= 0) {
    this.addAtHead(val);
  } else {
    let cur = this.head;
    while (--index) {
      if (!cur) return;
      cur = cur.next;
    }
    if (!cur) return;
    const next = cur.next;
    cur.next = { val, next };
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0) return;
  let pre = this.head;
  if (!pre) return;
  if (!index) {
    this.head = this.head.next;
    return;
  }
  while (--index) {
    if (!pre) return;
    pre = pre.next;
  }
  if (!pre.next) return;
  pre.next = pre.next.next;
};
const list = new MyLinkedList();
list.addAtHead(1);
list.addAtTail(3);
list.addAtIndex(1, 2);
console.log(list.get(1));
list.deleteAtIndex(1);
console.log(list);
