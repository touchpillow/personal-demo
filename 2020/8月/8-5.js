// var findRestaurant = function (list1, list2) {
//   let min = Infinity;
//   const map = new Map();
//   for (let i = 0, l1 = list1.length; i < l1; i++) {
//     map.set(list1[i], i);
//   }
//   return list2.reduce((res, item, index) => {
//     if (map.has(item)) {
//       if (map.get(item) + index < min) {
//         min = map.get(item) + index;
//         res.splice(0, Infinity, item);
//       } else if (map.get(item) + index == min) {
//         res.push(item);
//       }
//     }
//     return res;
//   }, []);
// };
// var canPlaceFlowers = function (flowerbed, n) {
//   const l = flowerbed.length;
//   for (let i = 1; i < l; i++) {
//     if (!n) return true;
//     if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
//       n--;
//       i++;
//     }
//     console.log(i, n);
//   }
//   return !n;
// };
// var a = [1, 0, 0, 0, 1];
// console.log(canPlaceFlowers(a, 2));

var reverseBetween = function (head, m, n) {
  if (m == n) return head;
  const p = new ListNode();
  p.next = head;
  const a = p;
  const index = 1;
  while (index < m) {
    head = head.next;
    a = a.next;
    index++;
  }
  let end;
  let start;
  a.next = reverseNode(head, n, index);
  const reverseNode = (head, n, index) => {
    if (!head) return head;
    if (index < n) {
      let next = head.next;
      const node = reverseNode(next, n, index + 1);
      start = start || head;
      head.next = null;
      next.next = head;
      return node;
    } else if (index == n) {
      end = head.next;
      return head;
    }
  };
  start.next = end;
  return p.next;
};
