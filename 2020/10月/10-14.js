// var arrayRankTransform = function (arr) {
//   const l = arr.length;
//   if (!l) return [];
//   const list = arr.slice().sort((a, b) => a - b);
//   let v = 0;
//   const map = new Map();
//   map.set(arr[0], 1);
//   for (let i = 1; i < l; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       v++;
//       map.set(arr[i], v);
//     }
//   }
//   return arr.map((i) => map.get(i));
// };
// var removePalindromeSub = function (s) {
//   const l = s.length;
//   if (!l) return 0;
//   let left = 0,
//     right = l - 1;
//   while (left < right) {
//     if (s[left] !== s[right]) return 2;
//     left++;
//     right--;
//   }
//   return 1;
// };
var oddEvenList = function (head) {
  const pre = new ListNode();
  const ev = new ListNode();
  let res = pre;
  let odd = ev;
  let v = 1;
  while (head) {
    if (v % 2) {
      res.next = head;
      head = head.next;
      res = res.next;
      res.next = null;
    } else {
      odd.next = head;
      head = head.next;
      odd = odd.next;
      odd.next = null;
    }
  }
  res.next = ev.next;
  return pre.next;
};
