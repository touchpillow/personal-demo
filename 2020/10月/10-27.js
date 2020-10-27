// const getPow = (a, b) => {
//   if (b == 0) return 1;
//   if (b == 1) return a;
//   if (b % 2) {
//     return (a * getPow(a, b - 1)) % 1337;
//   } else {
//     const v = getPow(a, b / 2);
//     return (v * v) % 1337;
//   }
// };
// var superPow = function (a, b) {
//   if (a == 1) return 1;
//   if (!b.length) return 1;
//   const item = b.pop();
//   const v1 = getPow(a, item);
//   const v2 = getPow(superPow(a, b), 10);
//   return (v1 * v2) % 1337;
// };
// var isPrefixOfWord = function (sentence, searchWord) {
//   const words = sentence.split(" ");
//   const index = words.findIndex((item) => {
//     return sentence.startWith(searchWord);
//   });
//   return index < 0 ? index : index + 1;
// };
var canBeEqual = function (target, arr) {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);
  const l = target.length;
  for (let i = 0; i < l; i++) {
    if (target[i] !== arr[i]) return false;
  }
  return true;
};
