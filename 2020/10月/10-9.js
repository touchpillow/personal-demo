// var removeDuplicateLetters = function (s) {
//   const l = s.length;
//   if (l < 2) return l;
//   let res = [];
//   for (let i = 0; i < l; i++) {
//     if (!res.includes(s[i])) {
//       const temp = s.slice(i + 1);
//       while (
//         res.length &&
//         temp.includes(res[res.length - 1]) &&
//         res[res.length - 1].charCodeAt() > s[i].charCodeAt()
//       ) {
//         res.pop();
//       }
//       res.push(s[i]);
//     }
//   }
//   return res.join("");
// };
// const s = "leetcode";
// console.log(removeDuplicateLetters(s));
var subtractProductAndSum = function (n) {
  const res = [...`${n}`];
  return res.reduce((a, b) => a * b) - res.reduce((a, b) => a + b);
};
