// var NestedIterator = function (nestedList) {
//   this.list = [];
//   const search = (root) => {
//     for (let i = 0, l = root.length; i < l; i++) {
//       const item = root[i];
//       if (item.isInteger()) {
//         this.list.push(item.getInteger());
//       } else {
//         search(item.getList());
//       }
//     }
//   };
//   search(nestedList);
//   this.index = 0;
// };

// /**
//  * @this NestedIterator
//  * @returns {boolean}
//  */
// NestedIterator.prototype.hasNext = function () {
//   return this.index < this.list.length;
// };

// /**
//  * @this NestedIterator
//  * @returns {integer}
//  */
// NestedIterator.prototype.next = function () {
//   return this.hasNext ? this.list[this.index++] : false;
// };
// var integerBreak = function (n) {
//   const list = new Array(n + 1).fill(1);
//   list[1] = 0;
//   list[2] = 1;
//   for (let i = 3; i <= n; i++) {
//     list[i] = Math.max(
//       2 * (i - 2),
//       2 * list[i - 2],
//       3 * (i - 3),
//       3 * list[i - 3]
//     );
//   }
//   return list[n];
// };
// console.log(integerBreak(8));
// var findLucky = function (arr) {
//   const map = new Map();
//   for (const n of arr) {
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   let v = 0;
//   for (const key of map.keys()) {
//     if (map.get(key) == key) {
//       v = Math.max(v, key);
//     }
//   }
//   return v;
// };
var countLargestGroup = function (n) {
  const map = new Map();
  const list = new Array(n + 1);
  list[0] = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 10) {
      list[i] = list[i - 1] + 1;
    } else {
      list[i] = list[i / 10];
    }
  }
  for (let i = 1; i <= n; i++) {
    map.set(list[i], (map.get(list[i]) || 0) + 1);
  }
  return Math.max(...map.values());
};
