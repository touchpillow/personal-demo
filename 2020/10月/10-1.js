// var numSquares = function (n) {
//   const list = new Array(n + 1).fill(0);
//   for (let i = 1; i <= n; i++) {
//     list[i] = 0;
//     for (let j = 1; i - j * j >= 0; j++) {
//       list[i] = Math.min(list[i], list[i - j * j] + 1);
//     }
//   }
//   return list[n];
// };
// const f = (s) => {
//   s = s.split("").sort((a, b) => a > b);
//   return s.filter((i) => i == s[0]).length;
// };
// var numSmallerByFrequency = function (queries, words) {
//   words = words.map(f);
//   return queries.map((item) => {
//     const ci = f(item);
//     return words.filter((i) => i > ci).length;
//   });
// };
// var countCharacters = function (words, chars) {
//   const map1 = {};
//   for (const s of chars) {
//     map1[s] = (map1[s] || 0) + 1;
//   }
//   return words
//     .filter((item) => {
//       const a = JSON.parse(JSON.stringify(map1));
//       for (const n of item) {
//         if (!a[n]) return false;
//         a[n]--;
//       }
//     })
//     .reduce((a, b) => a + b.length, 0);
// };
// document.getE
// function father() {
//   var a = 10;
//   function son(b) {
//     return a + b;
//   }
//   return son;
// }
// var b = father();
// b(2);
