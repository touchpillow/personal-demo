// var isLongPressedName = function (name, typed) {
//   const l = name.length;
//   const lr = typed.length;
//   if (l > lr) return false;
//   let r = 0;
//   for (let i = 0; i < l; i++) {
//     if (name[i] !== typed[r]) {
//       while (typed[r] == typed[r - 1]) {
//         r++;
//       }
//       if (r >= lr) return false;
//       if (name[i] !== typed[r]) return false;
//     }
//     r++;
//   }
//   while (typed[r] == typed[r - 1]) {
//     r++;
//   }
//   return r >= lr;
// };
// const name = "laiden",
//   typed = "laiden";
// console.log(isLongPressedName(name, typed));
// var numUniqueEmails = function (emails) {
//   const adress = new Set();
//   for (const n of emails) {
//     const l = n.length;
//     let s = "";
//     let flag = false;
//     for (let i = 0; i < l; i++) {
//       if (n[i] == "@") {
//         s += n.slice(i);
//         break;
//       } else if (!flag) {
//         if (n[i] == "+") {
//           flag = true;
//         } else if (n[i] !== ".") {
//           s += n[i];
//         }
//       }
//     }
//     adress.add(s);
//   }
//   return adress.size;
// };
// const a = [
//   "test.email+alex@leetcode.com",
//   "test.e.mail+bob.cathy@leetcode.com",
//   "testemail+david@lee.tcode.com",
// ];

// console.log(numUniqueEmails(a));
var Trie = function () {
  this.list = [];
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {};
