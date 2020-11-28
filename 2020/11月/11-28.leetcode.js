// var maxRepeating = function (sequence, word) {
//   let c = 1;
//   while (sequence.includes(word.repeat(c))) {
//     c++;
//   }
//   return c - 1;
// };
// const sequence = "baba",
//   word = "b";
// console.log(maxRepeating(sequence, word));
// var mergeInBetween = function (list1, a, b, list2) {
//   let cur = list1;
//   let c = 1;
//   while (c !== a) {
//     cur = list1.next;
//     c++;
//   }
//   const pre = cur;
//   c--;
//   while (c !== b) {
//     cur = list1.next;
//     c++;
//   }
//   pre.next = list2;
//   while (pre.next) {
//     pre = pre.next;
//   }
//   pre.next = cur.next;
//   return list1;
// };

// var FrontMiddleBackQueue = function () {
//   this.data = [];
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// FrontMiddleBackQueue.prototype.pushFront = function (val) {
//   this.data.unshift(val);
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
//   const index = ~~(this.data.length / 2);
//   this.data.splice(index, 0, val);
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// FrontMiddleBackQueue.prototype.pushBack = function (val) {
//   this.data.push(val);
// };

// /**
//  * @return {number}
//  */
// FrontMiddleBackQueue.prototype.popFront = function () {
//   if (this.data.length) {
//     return this.data.shift();
//   } else {
//     return -1;
//   }
// };

// /**
//  * @return {number}
//  */
// FrontMiddleBackQueue.prototype.popMiddle = function () {
//   if (this.data.length) {
//     const index = ~~((this.data.length - 1) / 2);
//     const item = this.data.splice(index, 1);
//     return item[0];
//   } else {
//     return -1;
//   }
// };

// /**
//  * @return {number}
//  */
// FrontMiddleBackQueue.prototype.popBack = function () {
//   if (this.data.length) {
//     return this.data.pop();
//   } else {
//     return -1;
//   }
// };

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
var minimumMountainRemovals = function (nums) {
  const l = nums.length;
  const left = new Array(l).fill(1);
  const right = new Array(l).fill(1);
  for (let i = 1; i < l; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        left[i] = Math.max(left[i], left[j] + 1);
      }
    }
  }
  for (let i = l - 2; i >= 0; i--) {
    for (let j = i + 1; j < l; j++) {
      if (nums[i] > nums[j]) {
        right[i] = Math.max(right[i], right[j] + 1);
      }
    }
  }
  let max = 0;
  for (let i = 1; i < l - 1; i++) {
    if (left[i] > 1 && right[i] > 1) {
      max = Math.max(max, left[i] + right[i] - 1);
    }
  }
  return l - max;
};
const nums = [1, 2, 3, 4, 4, 3, 2, 1];
console.log(minimumMountainRemovals(nums));
