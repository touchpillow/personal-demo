// var addTwoNumbers = function (l1, l2) {
//   let flag = 0;
//   let res = new ListNode();
//   let cur = res;
//   while (l1 || l2) {
//     const curV = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag;
//     flag = ~~(curV / 10);
//     const curNode = new ListNode(curV % 10);
//     cur.next = curNode;
//     cur = curNode;
//     l1 = l1 ? l1.next : null;
//     l2 = l2 ? l2.next : null;
//   }
//   return res.next;
// };
// var a = /\/(.+?)\//g;
// const s = "/aaa//bbb/";
// console.log(s.match(a));
// const s = "123df12";
// const a = /\d/g;
// s.replace(a, (c, d) => {
//   console.log(c, d);
// });
