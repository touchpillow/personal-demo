// var WordDictionary = function () {
//   this.data = {};
// };

// /**
//  * Adds a word into the data structure.
//  * @param {string} word
//  * @return {void}
//  */
// WordDictionary.prototype.addWord = function (word) {
//   let curData = this.data;
//   for (const s of word) {
//     if (curData[s]) {
//       curData = curData[s];
//     } else {
//       curData[s] = {};
//       curData = curData[s];
//     }
//   }
//   curData.FLAG = true;
// };

// /**
//  * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
//  * @param {string} word
//  * @return {boolean}
//  */
// WordDictionary.prototype.search = function (word) {
//   const l = word.length;
//   const deps = (start, curData) => {
//     for (let i = start; i < l; i++) {
//       if (word[i] !== ".") {
//         if (curData[word[i]]) {
//           curData = curData[word[i]];
//         } else {
//           return false;
//         }
//       } else {
//         const keys = Object.keys(curData);
//         return keys.some((item) => {
//           return deps(i + 1, curData[item]);
//         });
//       }
//     }
//     return curData.FLAG;
//   };
//   return deps(0, this.data);
// };
// [
//   "WordDictionary",
//   "addWord",
//   "addWord",
//   "addWord",
//   "search",
//   "search",
//   "search",
//   "search",
// ][([], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."])];
// const a = new WordDictionary();
// a.addWord("at");
// a.addWord("and");
// a.addWord("an");
// a.addWord("add");
// console.log(a.search("a"));
// var diStringMatch = function (S) {
//   const l = S.length;
//   const list = new Array(l + 1);
//   for (let i = 0; i <= l; i++) {
//     list[i] = i;
//   }
//   const res = [];
//   for (const i of S) {
//     if (i == "I") {
//       res.push(list.shift());
//     } else {
//       res.push(list.pop());
//     }
//   }
//   return res.concat(list);
// };
var minDeletionSize = function (A) {
  const l = A.length;
  const s = A[0].length;
  let res = 0;
  for (let i = 0; i < s - 1; i++) {
    for (let j = 0; j < l; j++) {
      if (A[j][i] > A[j + 1][i]) res++;
    }
  }
  return res;
};
