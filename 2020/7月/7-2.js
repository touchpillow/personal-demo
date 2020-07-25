/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//   const v = '';
//   while (head) {
//     v+=head.val;
//     head = head.next;
//   }
//   while (v.length > 1) {
//     if (v.pop() !== v.shift()) return false;
//   }
//   return true;
// };
var myAtoi = function (str) {
  const a = "-+0123456789 ";
  let res = "";
  let flag = 0;
  while (str.length) {
    let s = str[0];
    str = str.substring(1);
    if (a.includes(s)) {
      if (flag && s === " ") break;
      if (!flag && s === " ") continue;
      if (!flag) {
        if (s === "-") {
          flag = -1;
        } else if (s === "+") {
          flag = 1;
        } else {
          res += s;
          flag = 1;
        }
      } else {
        if (s == "-" || s == "+") break;
        res += s;
      }
    } else {
      break;
    }
  }
  console.log(res);
  if (res && !(res == "-" || res == "+")) {
    const a = flag * Number(res);
    if (a >= 2147483647) return 2147483647;
    if (a <= -2147483648) return -2147483648;
    return a;
  }
  return 0;
};
myAtoi("   +0 123");
