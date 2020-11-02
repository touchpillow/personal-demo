// var RandomizedSet = function () {
//   this.data = new Set();
// };

// /**
//  * Inserts a value to the set. Returns true if the set did not already contain the specified element.
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.insert = function (val) {
//   if (this.data.has(val)) return false;
//   this.data.add(val);
//   return true;
// };

// /**
//  * Removes a value from the set. Returns true if the set contained the specified element.
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.remove = function (val) {
//   if (!this.data.has(val)) return false;
//   this.data.delete(val);
//   return true;
// };

// /**
//  * Get a random element from the set.
//  * @return {number}
//  */
// RandomizedSet.prototype.getRandom = function () {
//   const data = [...this.data];
//   const index = ~~(Math.random() * data.length);
//   return data[index];
// };
// var findKthPositive = function (arr, k) {
//   let v = 0;
//   let c = 0;
//   let i = 0;
//   while (c < k) {
//     v++;
//     if (arr[i] !== v) {
//       c++;
//     } else {
//       i++;
//     }
//   }
//   return v;
// };
// const arr = [1, 2, 3, 4],
//   k = 2;
// console.log(findKthPositive(arr, k));
var containsPattern = function (arr, m, k) {
  const l = arr.length;
  arr = arr.join("");
  if (m * k > l) return false;
  const map = new Map();
  for (let i = 0; i < l + 1 - m; i++) {
    const s = arr.slice(i, m + i);
    if (arr.includes(s.repeat(k))) return true;
  }
  return false;
};
const arr = [1, 2, 4, 4, 4, 4],
  m = 1,
  k = 3;
console.log(containsPattern(arr, m, k));
