// var MyCircularDeque = function (k) {
//   this.data = [];
//   this.length = k;
// };

// /**
//  * Adds an item at the front of Deque. Return true if the operation is successful.
//  * @param {number} value
//  * @return {boolean}
//  */
// MyCircularDeque.prototype.insertFront = function (value) {
//   if (this.data.length >= this.length) return false;
//   this.data.unshift(value);
//   return true;
// };

// /**
//  * Adds an item at the rear of Deque. Return true if the operation is successful.
//  * @param {number} value
//  * @return {boolean}
//  */
// MyCircularDeque.prototype.insertLast = function (value) {
//   if (this.data.length >= this.length) return false;
//   this.data.push(value);
//   return true;
// };

// /**
//  * Deletes an item from the front of Deque. Return true if the operation is successful.
//  * @return {boolean}
//  */
// MyCircularDeque.prototype.deleteFront = function () {
//   if (this.isEmpty()) return false;
//   this.data.shift();
//   return true;
// };

// /**
//  * Deletes an item from the rear of Deque. Return true if the operation is successful.
//  * @return {boolean}
//  */
// MyCircularDeque.prototype.deleteLast = function () {
//   if (this.isEmpty()) return false;
//   this.data.pop();
//   return true;
// };

// /**
//  * Get the front item from the deque.
//  * @return {number}
//  */
// MyCircularDeque.prototype.getFront = function () {
//   if (this.isEmpty()) return -1;
//   return this.data[0];
// };

// /**
//  * Get the last item from the deque.
//  * @return {number}
//  */
// MyCircularDeque.prototype.getRear = function () {
//   if (this.isEmpty()) return -1;
//   return this.data[this.data.length - 1];
// };

// /**
//  * Checks whether the circular deque is empty or not.
//  * @return {boolean}
//  */
// MyCircularDeque.prototype.isEmpty = function () {
//   return !this.data.length;
// };

// /**
//  * Checks whether the circular deque is full or not.
//  * @return {boolean}
//  */
// MyCircularDeque.prototype.isFull = function () {
//   return this.length === this.data.length;
// };
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  let c = 0;
  let pre = Infinity;
  const l = pairs.length;
  for (let i = l - 1; i >= 0; i--) {
    const [start, end] = pairs[i];
    if (end < pre) {
      c++;
      pre = start;
    }
  }
  return c;
};
