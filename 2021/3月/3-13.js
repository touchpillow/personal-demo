// const getmid = (x1, x2) => {
//   return [(x1[0] + x2[0]) / 2, (x1[1] + x2[1]) / 2];
// };
// const getLength = (x1, x2) => {
//   return Math.pow(x1[0] - x2[0], 2) + Math.pow(x1[1] - x2[1], 2);
// };
// var minAreaFreeRect = function (points) {
//   const l = points.length;
//   const map = new Map();
//   let min = Infinity;
//   for (let i = 0; i < l - 1; i++) {
//     for (let j = i + 1; j < l; j++) {
//       const middle = getmid(points[i], points[j]);
//       const length = getLength(points[i], points[j]);
//       if (map.has(`${middle[0]}-${middle[1]}-${length}`)) {
//         const target = map.get(`${middle[0]}-${middle[1]}-${length}`);
//         min = Math.min(
//           min,
//           ...target.map((item) => {
//             console.log(item, points[i], points[j], middle);
//             return getLength(item, points[i]) * getLength(item, points[j]);
//           })
//         );
//         map.get(`${middle[0]}-${middle[1]}-${length}`).push(points[i]);
//       } else {
//         map.set(`${middle[0]}-${middle[1]}-${length}`, [points[i]]);
//       }
//     }
//   }
//   return min === Infinity ? 0 : Math.sqrt(min);
// };
// const a = [
//   [0, 3],
//   [1, 2],
//   [3, 1],
//   [1, 3],
//   [2, 1],
// ];
// console.log(minAreaFreeRect(a));
// const transform = (s) => {
//   return s.toLowerCase().replace(/[aeiou]/g, "*");
// };
// var spellchecker = function (wordlist, queries) {
//   const map2 = new Map();
//   const map3 = new Map();
//   const map = new Map();
//   const l = wordlist.length;
//   for (let i = 0; i < l; i++) {
//     map.set(wordlist[i], i);
//     if (!map2.has(wordlist[i].toLowerCase())) {
//       map2.set(wordlist[i].toLowerCase(), i);
//     }
//     const newWord = transform(wordlist[i]);
//     if (!map3.has(newWord)) {
//       map3.set(newWord, i);
//     }
//   }
//   return queries.map((item) => {
//     return (
//       wordlist[
//         map.get(item) ?? map2.get(item.toLowerCase()) ?? map3.get(newItem)
//       ] ?? ""
//     );
//   });
// };
// const fn = (s) => {
//   const stack = [
//     {
//       pre: "",
//       next: s,
//     },
//   ];
//   //next有值，说明字符还没取完
//   while (stack[0].next.length) {
//     const cur = stack.shift();
//     const next = cur.next;
//     const nextLen = next.length;
//     //从剩余字符串中取每一个字符拼接当前字符
//     //下一轮循环用到的字符串要去掉当前的字符
//     for (let i = 0; i < nextLen; i++) {
//       stack.push({
//         pre: `${cur.pre}${next[i]}`,
//         next: `${next.slice(0, i)}${next.slice(i + 1)}`,
//       });
//     }
//   }
//   return stack.map((item) => item.pre);
// };
// console.log(fn("abcd"));
// console.log(a);
// let a = "";
