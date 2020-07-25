// var findRadius = function (houses, heaters) {
//   let i1 = 0;
//   let i2 = 0;
//   const l1 = houses.length;
//   const l2 = heaters.length;
//   let r = 0;
//   while (i1 < l1 && i2 < l2) {
//     const minR = Math.abs(houses[i1] - heaters[i2]);
//     if (minR <= r) {
//       i1++;
//     } else if (i2 === l2 - 1) {
//       r = minR;
//     } else if (houses[i1] < heaters[i2]) {
//       r = minR;
//     } else {
//       i2++;
//     }
//   }
//   return r;
// };
// var licenseKeyFormatting = function (S, K) {
//   S = S.toUpperCase().replace("-", "");
//   const l = S.length;
//   const n = l % K;
//   let res = "";
//   res = !n ? "" : `${S.slice(0, n)}-`;
//   for (let i = 0; i + n < l; i++) {
//     if (!(n % K)) {
//       res += `-${S[i + n]}`;
//     } else {
//       res += `${S[i + n]}`;
//     }
//   }
//   return res;
// };
var rotateRight = function (head, k) {
  const list = [];
  while (head) {
    list.push(head);
    head = head.next;
  }
  const l = list.length;
  if (!l) return head;
  const index = k % l;
  head = list[(l - index) % l];
  list[l - 1].next = list[0];
  list[l - index - 1].next = null;
  return head;
};
