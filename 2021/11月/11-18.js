var BrowserHistory = function (homepage) {
  this.stack = [homepage];
  this.currentIndex = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  if (this.currentIndex === this.stack.length - 1) {
    this.stack.push(url);
  } else {
    this.stack = this.stack.slice(0, this.currentIndex + 1).concat(url);
  }
  this.currentIndex++;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  steps = Math.min(this.currentIndex, steps);
  this.currentIndex -= steps;
  return this.stack[this.currentIndex];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  steps = Math.min(this.stack.length - 1 - this.currentIndex, steps);
  this.currentIndex += steps;
  return this.stack[this.currentIndex];
};
