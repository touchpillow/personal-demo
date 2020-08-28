// var insertionSortList = function (head) {
//   const res = new ListNode();
//   while (head) {
//     let list = res;
//     while (list.next && head.val > list.next.val) {
//       list = list.next;
//     }
//     if (!list.next) {
//       list.next = head;
//       head = head.next;
//     } else {
//       const next = head.next;
//       head.next = list.next;
//       list.next = head;
//       head = next;
//     }
//   }
//   return res.next;
// };
// var largeGroupPositions = function (S) {
//   let s = S[0];
//   let start = 0,
//     end = 0;
//   const l = S.length;
//   const res = [];
//   if (l < 3) return res;
//   for (let i = 0; i < l; ) {
//     while (S[i] === s) {
//       end = i;
//       i++;
//     }
//     console.log(start,end,)
//     if (end - start >= 2) {
//       res.push([start, end]);
//     }
//     start = end = i;
//     i++;
//   }
//   if (end - start >= 2) {
//     res.push([start, end]);
//   }
//   return res;
// };
// const a = "abbxxxxzzy";
// console.log(largeGroupPositions(a));
var flipAndInvertImage = function (A) {
  const h = A.length;
  if (!h) return A;
  const w = A[0].length;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w / 2; j++) {
      [A[i][j], A[i][w - j - 1]] = [A[i][w - j - 1] ^ 1, A[i][j] ^ 1];
    }
  }
  return A;
};
