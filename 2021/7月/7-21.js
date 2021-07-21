// var SnapshotArray = function (length) {
//   this.record = [];
//   this.data = new Array(length).fill(0);
// };

// /**
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// SnapshotArray.prototype.set = function (index, val) {
//   this.data[index] = val;
// };

// /**
//  * @return {number}
//  */
// SnapshotArray.prototype.snap = function () {
//   this.record.push(this.data.join("-"));
//   return this.record.length - 1;
// };

// /**
//  * @param {number} index
//  * @param {number} snap_id
//  * @return {number}
//  */
// SnapshotArray.prototype.get = function (index, snap_id) {
//   const record = this.record[snap_id];
//   return Number(record.split("-")[index]);
// // };
// var SnapshotArray = function (length) {
//   this.record = [new Map()];
// };

// /**
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// SnapshotArray.prototype.set = function (index, val) {
//   this.record[this.record.length - 1].set(index, val);
// };

// /**
//  * @return {number}
//  */
// SnapshotArray.prototype.snap = function () {
//   this.record.push(new Map());
//   return this.record.length - 1;
// };

// /**
//  * @param {number} index
//  * @param {number} snap_id
//  * @return {number}
//  */
// SnapshotArray.prototype.get = function (index, snap_id) {
//   for (let i = snap_id; i >= 0; i--) {
//     if (this.record[i].has(index)) return this.record[i].get(index);
//   }
//   return 0;
// };
// var sumBase = function (n, k) {
//   let sum = 0;
//   while (n) {
//     sum += n % k;
//     n = ~~(n / k);
//   }
//   return sum;
// };
// var sumBase = function (n, k) {
//   const s = n.toString(k);
//   let sum = 0;
//   for (const v of s) {
//     sum += Number(v);
//   }
//   return sum;
// };
var canBeTypedWords = function (text, brokenLetters) {
  const words = text.split(" ");
  brokenLetters = [...brokenLetters];
  return words.filter((item) => {
    return brokenLetters.every((s) => !item.includes(s));
  }).length;
};
