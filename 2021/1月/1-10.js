// var MagicDictionary = function () {
//   this.data = [];
//   this.length = [];
// };

// /**
//  * @param {string[]} dictionary
//  * @return {void}
//  */
// MagicDictionary.prototype.buildDict = function (dictionary) {
//   this.data = dictionary;
//   this.length = dictionary.map((item) => item.length);
// };

// /**
//  * @param {string} searchWord
//  * @return {boolean}
//  */
// MagicDictionary.prototype.search = function (searchWord) {
//   return this.data
//     .filter((item, index) => {
//       return this.length[index] === searchWord.length;
//     })
//     .some((item) => {
//       let c = 0;
//       const l = item.length;
//       for (let i = 0; i < l; i++) {
//         if (item[i] !== searchWord[i]) c++;
//       }
//       return c === 1;
//     });
// };
// const dic = new MagicDictionary();
// dic.buildDict(["hello", "hallo", "leetcode"]);
// console.log(dic.search("leetcodd"));
// var MapSum = function () {
//   this.data = {};
// };

// /**
//  * @param {string} key
//  * @param {number} val
//  * @return {void}
//  */
// MapSum.prototype.insert = function (key, val) {
//   let cur = this.data;
//   for (const s of key) {
//     if (cur[s]) {
//       cur = cur[s];
//     } else {
//       cur[s] = {};
//       cur = cur[s];
//     }
//   }
//   cur.val = val;
// };

// /**
//  * @param {string} prefix
//  * @return {number}
//  */
// MapSum.prototype.sum = function (prefix) {
//   let obj = this.data;
//   for (const s of prefix) {
//     obj = obj[s];
//     if (!obj) return 0;
//   }
//   let v = 0;
//   const stack = [obj];
//   while (stack.length) {
//     const item = stack.shift();
//     v += item.val || 0;
//     const keys = Object.keys(item).filter((item) => item !== "val");
//     stack.push(...keys.map((key) => item[key]));
//   }
//   return v;
// };
// const mapSum = new MapSum();
// mapSum.insert("apple", 3);
// console.log(mapSum.sum("ap"));
var MapSum = function () {
  this.data = {};
  this.keys = new Set();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.data[key] = val;
  this.keys.add(key);
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let c = 0;
  for (const key of this.keys) {
    if (key.startWith(prefix)) c += this.data[key];
  }
  return c;
};
