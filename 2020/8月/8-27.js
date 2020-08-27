// var shortestToChar = function (S, C) {
//   const l = S.length;
//   const res = new Array(l).fill(Infinity);
//   const res1 = new Array(l).fill(Infinity);
//   let index = Infinity;
//   for (let i = 0; i < l; i++) {
//     if (S[i] === C) {
//       index = 0;
//     }
//     res[i] = index++;
//   }
//   index = Infinity;
//   for (let i = l - 1; i >= 0; i--) {
//     if (S[i] === C) {
//       index = 0;
//     }
//     res1[i] = index++;
//   }
//   for (let i = 0; i < l; i++) {
//     res[i] = Math.min(res[i], res1[i]);
//   }
//   return res;
// };
// const S = "loveleetcode",
//   C = "e";
// console.log(shortestToChar(S, C));
var toGoatLatin = function (S) {
  const s = ["a", "e", "i", "o", "u"];
  const words = S.split(" ");
  const temp = "a";
  words.forEach((item, index) => {
    if (s.includes(item[0].toLowerCase())) {
      words[index] = `${item}ma${temp.repeat(index + 1)}`;
    } else {
      words[index] = `${item.slice(1)}${item[0]}ma${temp.repeat(index + 1)}`;
    }
  });
  return words.join(" ");
};
