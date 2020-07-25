// var getIntersectionNode = function (headA, headB) {
//   let map = new Map();
//   while (headA) {
//     map.set(headA);
//     headA = headA.next;
//   }
//   while (headB) {
//     if (map.has(headB)) {
//       return headB.val;
//     }
//     headB = headB.next;
//   }
//   return null;
// };
// var twoSum = function (numbers, target) {
//   let l = numbers.length;
//   let min = target - numbers[l - 1];
//   let map = {};
//   for (let i = 1; i <= l; i++) {
//     if (numbers[i - 1] < min) continue;
//     if (map[target - numbers[i - 1]]) return [map[target - numbers[i - 1]], i];
//     map[numbers[i - 1]] = i;
//   }
// };
let map = {
  0: "Z",
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
  11: "K",
  12: "L",
  13: "M",
  14: "N",
  15: "O",
  16: "P",
  17: "Q",
  18: "R",
  19: "S",
  20: "T",
  21: "U",
  22: "V",
  23: "W",
  24: "X",
  25: "Y",
  26: "Z",
};
var convertToTitle = function (n) {
  let a = 1;
  while (n > Math.pow(26, a)) {
    n = n - Math.pow(26, a);
    a++;
  }
  let res = "";
  let b,
    c = 1;
  while (n > 0) {
    b = n % 26;
    n = ((n / 26) | 0) - (!b ? 1 : 0);
    res = `${map[res ? b + 1 : b]}${res}`;
    c++;
  }
  return res.padStart(a, "A");
};
console.log(convertToTitle(52));
