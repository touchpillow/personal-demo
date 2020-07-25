// var isIsomorphic = function (s, t) {
//   const map = {};
//   const res = [];
//   for (let i = 0, l = s.length; i < l; i++) {
//     if (!map[s[i]] && !res.includes(t[i])) {
//       map[s[i]] = t[i];
//       res.push(t[i]);
//     } else {
//       if (map[s[i]] && map[s[i]] !== t[i]) return false;
//       if (!map[s[i]] && res.includes(t[i])) return false;
//     }
//   }
//   return true;
// };
// var reverseList = function (head) {
//   let res = null;
//   let temp;
//   while (head) {
//     temp = head.next;
//     head.next = res;
//     res = head;
//     head = temp;
//   }
//   return res;
// };
var a = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};
// var aa = (head, res) => {
//   if (head && head.next) {
//     const a = aa(head.next, res);
//     a.next = head;
//     head.next = null;
//     return head;
//   } else {
//     res.val = head;
//     return head;
//   }
// };
// var reverseList = function (head) {
//   let res = { val: null };
//   aa(head, res);
//   return res.val;
// };

var reverseList = function (head) {
  if (head && head.next) {
    let next = head.next;
    let reverseHead = reverseList(next);
    head.next = null;
    next.next = head;
    return reverseHead;
  } else {
    return head;
  }
};

console.log(reverseList(a));
