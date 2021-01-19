// var MyCalendarTwo = function () {
//   this.stack = [];
//   this.map = {};
//   this.list = [];
// };

// /**
//  * @param {number} start
//  * @param {number} end
//  * @return {boolean}
//  */
// MyCalendarTwo.prototype.book = function (start, end) {
//   const insert = (v) => {
//     if (this.list.includes(v)) return;
//     const i = this.list.findIndex((i) => i > v);
//     if (i < 0) {
//       this.list.push(v);
//     } else {
//       this.list.splice(i, 0, v);
//     }
//   };

//   let cur = 0;
//   this.map[start] = (this.map[start] || 0) + 1;
//   this.map[end] = (this.map[end] || 0) - 1;
//   insert(start);
//   insert(end);
//   for (const i of this.list) {
//     cur += this.map[i] || 0;
//     if (cur >= 3) {
//       this.map[start] = (this.map[start] || 0) - 1;
//       this.map[end] = (this.map[end] || 0) + 1;
//       return false;
//     }
//   }

//   this.stack.push([start, end]);

//   return true;
// };

// /**
//  * Your MyCalendarTwo object will be instantiated and called as such:
//  * var obj = new MyCalendarTwo()
//  * var param_1 = obj.book(start,end)
//  */
// const a = new MyCalendarTwo();

// const c = [
//   [47, 50],
//   [1, 10],
//   [27, 36],
//   [40, 47],
//   [20, 27],
//   [15, 23],
//   [10, 18],
//   [27, 36],
//   [17, 25],
//   [8, 17],
//   [24, 33],
//   [23, 28],
// ];
// c.forEach((item) => {
//   console.log(a.book(item[0], item[1]));
// });
var asteroidCollision = function (asteroids) {
  const stack = [];
  const loop = (a) => {
    if (!stack.length) {
      stack.push(a);
      return;
    }
    if (stack[stack.length - 1] > 0 && a < 0) {
      if (Math.abs(a) === Math.abs(stack[stack.length - 1])) {
        stack.pop();
      } else if (Math.abs(a) < Math.abs(stack[stack.length - 1])) {
        return;
      } else {
        stack.pop();
        loop(a);
      }
    } else {
      stack.push(a);
    }
  };
  asteroids.forEach(loop);
  return stack;
};
const a = [-2, -1, 1, 2];
console.log(asteroidCollision(a));
