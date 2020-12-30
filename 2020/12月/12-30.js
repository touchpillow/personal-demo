// var leastInterval = function (tasks, n) {
//   if (!n) return tasks.length;
//   const map = new Map();
//   let max = 0;
//   let list = [];
//   for (const k of tasks) {
//     map.set(k, (map.get(k) || 0) + 1);
//   }
//   const list = [];
//   for (const k of map.keys()) {
//     const i = map.get(k);
//     if (!list[i]) {
//       list[i] = [];
//     }
//     list[i].push(k);
//   }

//   let sum = 0;
//   while (true) {
//     let pre = list.length - 1;
//     while (!list[pre] && pre >= 0) {
//       pre--;
//     }
//     if (pre < 0) break;
//     let c = n;
//     const set = new Set();
//     while (c >= 0) {
//       while (list[pre] && list[pre].length && c >= 0) {
//         c--;
//         const cur = list[pre].shift();
//         if (pre === 0) continue;
//         if (!list[pre - 1]) {
//           list[pre - 1] = [];
//         }
//         list[pre - 1].push(cur);
//       }
//       pre--;
//     }
//   }
// };
var MyCircularQueue = function (k) {
  this.list = [];
  this.max = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.list.length >= this.max) return false;
  this.list.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (!this.list.length) return false;
  this.list.pop();
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (!this.list.length) return -1;
  return this.list[0];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (!this.list.length) return -1;
  return this.list[this.list.length - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return !this.list.length;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.list.length === this.max;
};
