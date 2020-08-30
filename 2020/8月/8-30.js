// var reverseWords = function (s) {
//   const words = s
//     .trim()
//     .split(" ")
//     .filter((i) => i);
//   return words.reverse().join(" ");
// };
// var reverseWords = function (s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (s[left] === " ") left++;
//   while (s[right] === " ") right--;
//   const res = [];
//   while (left <= right) {
//     let word = "";
//     if (s[left] === " " && word) {
//       res.unshift(word);
//       word = "";
//     } else if (s[left] !== " ") {
//       word += s[left];
//     }
//     left++;
//   }
//   return res.join(" ");
// };
// var backspaceCompare = function (S, T) {
//   let s1 = "";
//   let s2 = "";
//   for (const s of S) {
//     if (s == "#") {
//       s1 = s1.slice(0, s1.length - 1);
//     } else {
//       s1 += s;
//     }
//   }
//   for (const s of S) {
//     if (s == "#") {
//       s2 = s2.slice(0, s1.length - 1);
//     } else {
//       s2 += s;
//     }
//   }
//   return s1 === s2;
// };
var maxDistToClosest = function (seats) {
  let length = 0;
  let max = 0;
  let left;
  for (let i = 0, l = seats.length; i < l; i++) {
    if (seats[i] == 0) {
      length++;
    } else {
      left = left === undefined ? length : left;
      max = length > max ? length : max;
      length = 0;
    }
  }
  return Math.max(left, length, Math.ceil(max / 2));
};
