// var uniqueMorseRepresentations = function (words) {
//   const decode = [
//     ".-",
//     "-...",
//     "-.-.",
//     "-..",
//     ".",
//     "..-.",
//     "--.",
//     "....",
//     "..",
//     ".---",
//     "-.-",
//     ".-..",
//     "--",
//     "-.",
//     "---",
//     ".--.",
//     "--.-",
//     ".-.",
//     "...",
//     "-",
//     "..-",
//     "...-",
//     ".--",
//     "-..-",
//     "-.--",
//     "--..",
//   ];
//   const decodeList = words.map((item) => {
//     let res = "";
//     for (const s of item) {
//       res += decode[s.charCodeAt() - 97];
//     }
//     return res;
//   });
//   return words.length - new Set(decodeList).size;
// };
// var numberOfLines = function (widths, S) {
//   const l = S.length;
//   const numberList = new Array(l);
//   for (let i = 0; i < l; i++) {
//     numberList[i] = widths[S[i].charCodeAt() - 97];
//   }
//   const res = [];
//   let count = 0;
//   for (const n of numberList) {
//     if (count + n > 100) {
//       res.push(count);
//       count = n;
//     } else {
//       count += n;
//     }
//   }
//   return [res.length + 1, count];
// };
var reorderList = function (head) {
  const list = [];
  while (head) {
    list.push(head);
    head = head.next;
  }
  const pre = new ListNode();
  let node = pre;
  let count = 0;
  while (list.length) {
    if (count % 2) {
      node.next = list.pop();
    } else {
      node.next = list.shift();
    }
    node = node.next;
    count++;
  }
  return pre.next;
};
