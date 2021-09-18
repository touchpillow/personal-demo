var ProductOfNumbers = function () {
  this.init();
};
ProductOfNumbers.prototype.init = function (num) {
  this.stack = [];
};
/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  if (!num) {
    this.init();
  } else {
    this.stack.push((this.stack[this.stack.length - 1] ?? 1) * num);
  }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  return k > this.stack.length
    ? 0
    : this.stack[this.stack.length - 1] /
        (this.stack[this.stack.length - 1 - k] ?? 1);
};
