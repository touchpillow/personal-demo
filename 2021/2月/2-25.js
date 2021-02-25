// var RLEIterator = function (A) {
//   const l = A.length;
//   this.data = [];
//   for (let i = 0; i < l; i += 2) {
//     this.data.push([A[i], A[i + 1]]);
//   }
// };

// /**
//  * @param {number} n
//  * @return {number}
//  */
// RLEIterator.prototype.next = function (n) {
//   while (n) {
//     if (!this.data.length) return -1;
//     const item = this.data.shift();
//     if (item[0] >= n) {
//       this.data.unshift([item[0] - n, item[1]]);
//       n = 0;
//       return item[1];
//     } else {
//       n -= item[0];
//     }
//   }
// };
var StockSpanner = function () {
  this.data = [];
  this.length = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let length = 1;
  while (this.data.length && this.data[this.data.length - 1] <= price) {
    this.data.pop();
    length += this.length.pop();
  }
  this.data.push(price);
  this.length.push(W);
};
