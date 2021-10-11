var MedianFinder = function () {
  this.stack = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  const l = this.stack.length;
  if (!l) {
    this.stack.push(num);
    return;
  }
  let left = 0,
    right = l - 1;
  if (num >= this.stack[right]) {
    this.stack.push(num);
    return;
  }
  if (num <= this.stack[right]) {
    this.stack.unshift(num);
    return;
  }
  while (left < right) {
    const mid = ~~((left + right) / 2);
    if (mid === left) {
      break;
    }
    if (this.stack[mid] === num) {
      right = mid;
      break;
    }
    if (this.stack[mid] > num) {
      right = mid;
    } else {
      left = mid;
    }
  }
  this.stack.splice(right, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const l = this.stack.length;
  if (l % 2) {
    return this.stack[~~(this.stack.length / 2)];
  }
  return (
    (this.stack[this.stack.length / 2] +
      this.stack[this.stack.length / 2 - 1]) /
    2
  );
};
