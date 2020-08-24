// var rotatedDigits = function (N) {
//   let count = 0;
//   for (let i = 1; i <= N; i++) {
//     if (/[2569]/.test(`${i}`) && !/[347]/.test(`${i}`)) {
//       console.log(i);
//       count++;
//     }
//   }
//   return count;
// };
// console.log(rotatedDigits(10));
// var rotateString = function (A, B) {
//   const l1 = A.length;
//   const l2 = B.length;
//   if (l1 !== l2) return false;
//   let index = A.indexOf(B[0]);
//   while (index >= 0) {
//     if (index < 0) break;
//     let i = 0;
//     for (i = 0; i < l1; i++) {
//       if (A[(i + index + l1) % l1] !== B[i]) {
//         break;
//       }
//     }
//     if (i == l1) return true;
//     index = A.indexOf(B[0], index + 1);
//   }
//   return false;
// };
// // const A = "abcde",
// //   B = "abced";
// const A = "abcde",
//   B = "cdeab";
// console.log(rotateString(A, B));
// var detectCycle = function (head) {
//   if (!head) return null;
//   const set = new Set();
//   while (head) {
//     if (!set.has(head)) {
//       set.add(head);
//       head = head.next;
//     } else {
//       return head;
//     }
//   }
//   return null;
// };
var detectCycle = function (head) {
  if (!head) return null;
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    if (slow == fast) {
      while (slow !== head) {
        slow = slow.next;
        (head = head), next;
      }
      return slow;
    } else {
      fast = fast.next.next;
      slow = slow.next;
    }
  }
  return null;
};
