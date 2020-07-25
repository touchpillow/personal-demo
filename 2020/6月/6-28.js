/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let flag = false;
  let res = null;
  let cur = null;
  while (l1 || l2 || flag) {
    let v1 = 0;
    let v2 = 0;
    if (l1) {
      v1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      v2 = l2.val;
      l2 = l2.next;
    }
    const v = (flag ? 1 : 0) + v1 + v2;
    flag = v > 9;
    const cv = new ListNode(v % 10);
    if (!res) {
      res = cur = cv;
    } else {
      cur.next = cv;
      cur = cv;
    }
  }
  return res;
};
// console.log(
//   addTwoNumbers(
//     { val: 2, next: { val: 4, next: null } },
//     { val: 3, next: { val: 5, next: null } }
//   )
// );
var containsDuplicate = function (nums) {};
