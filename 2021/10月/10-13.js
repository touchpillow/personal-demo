/*
 * @Author: your name
 * @Date: 2021-10-13 12:58:55
 * @LastEditTime: 2021-10-13 13:01:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/personal-demo/2021/10月/10-13.js
 */
var CustomStack = function (maxSize) {
  this.size = maxSize;
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.size) {
    this.stack.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  return this.stack.pop() ?? -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  for (let i = 0; i < k && i < this.stack.length; i++) {
    this.stack[i] += val;
  }
};
