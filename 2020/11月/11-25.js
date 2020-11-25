// var removeDuplicateNodes = function (head) {
//   if (!head) return head;
//   const res = [head.val];
//   let resHead = head;
//   let cur = head;
//   head = head.next;
//   while (head) {
//     const next = head.next;
//     head.next = null;
//     if (!res.includes(head.val)) {
//       res.push(head.val);
//       cur.next = head;
//     }
//     head = next;
//   }
//   return resHead;
// };
// var kthToLast = function (head, k) {
//   let slow = head;
//   let fast = head;
//   while (--k) {
//     fast = fast.next;
//   }
//   while (fast) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   return slow;
// };
var findRightInterval = function (intervals) {
  let max = -Infinity;
  const map = intervals.reduce((map, item, index) => {
    max = Math.max(max, item[0]);
    map[item[0]] = index;
    return map;
  }, {});
  return intervals.map((item) => {
    for (let i = item[1]; i <= max; i++) {
      if (map[i] !== undefined) {
        return map[i];
      }
    }
    return -1;
  });
};
