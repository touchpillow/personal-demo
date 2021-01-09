// var totalMoney = function (n) {
//   const weeks = ~~(n / 7);
//   const d = n % 7;
//   return (
//     ((28 + 28 + (weeks - 1) * 7) * weeks) / 2 +
//     ((weeks + 1 + weeks + d) * d) / 2
//   );
// };
// console.log(totalMoney(10));
// var maximumGain = function (s, x, y) {
//   const flag = x > y ? true : false;
//   let c = 0;
//   let stack = [];
//   const l = s.length;
//   if (l < 2) return 0;
//   while (true) {
//     while (flag && s.includes("ab")) {
//       for (let i = 0; i < s.length; i++) {
//         if (stack[stack.length - 1] === "a" && s[i] === "b") {
//           c += x;
//           stack.pop();
//         } else {
//           stack.push(s[i]);
//         }
//       }
//       s = stack.join("");
//       stack = [];
//     }
//     while (!flag && s.includes("ba")) {
//       for (let i = 0; i < s.length; i++) {
//         if (stack[stack.length - 1] === "b" && s[i] === "a") {
//           c += y;
//           stack.pop();
//         } else {
//           stack.push(s[i]);
//         }
//       }
//       s = stack.join("");
//       stack = [];
//     }
//     for (let i = 0; i < s.length; i++) {
//       if (stack[stack.length - 1] === "a" && s[i] === "b") {
//         c += x;
//         stack.pop();
//       } else if (stack[stack.length - 1] === "b" && s[i] === "a") {
//         c += y;
//         stack.pop();
//       } else {
//         stack.push(s[i]);
//       }
//     }
//     s = stack.join("");
//     stack = [];

//     for (let i = 0; i < s.length; i++) {
//       if (stack[stack.length - 1] === "b" && s[i] === "a") {
//         c += y;
//         stack.pop();
//       } else if (stack[stack.length - 1] === "a" && s[i] === "b") {
//         c += x;
//         stack.pop();
//       }
//       {
//         stack.push(s[i]);
//       }
//     }
//     s = stack.join("");
//     stack = [];
//     if (!s.includes("ab") && !s.includes("ba")) break;
//   }
//   return c;
// };
// const s =
//     "abbmzgaabtaabsbabhaahabnaeabdbaababbbiabaavababtabwbababzbdabbaaabhbyabdvabbaabbquapaaaaqbbblbuaawlnbbaxaubbbbbpbabbbpaaaacbbaabaaaahbbcoyaauabanqaabpbbbgaawbhabbbbaobsaaababbafbababbbbaaaqbabsbsmabbxqylbbbba",
//   x = 9421,
//   y = 8003;
// console.log(maximumGain(s, x, y));
var constructDistancedSequence = function (n) {
  if (n === 1) return [1];
  if (n === 2) return [2, 1, 2];
  const res = new Array(2 * n - 1);
  res[0] = n;
  res[n] = n;
  res[1] = 1;
  let flag = true;
  let pre = n;
  for (let i = n - 1; i > 1; i--) {
    if (flag) {
      res[pre + 1] = i;
      res[pre + 1 - i] = i;
      pre = pre + 1 - i;
    } else {
      res[pre - 1] = i;
      res[pre - 1 + i] = i;
      pre = pre - 1 + i;
    }
    flag = !flag;
  }
  return res;
};
console.log(constructDistancedSequence(3));
