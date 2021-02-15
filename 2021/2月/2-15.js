// var ExamRoom = function (N) {
//   this.data = [];
//   this.l = N;
// };

// /**
//  * @return {number}
//  */
// ExamRoom.prototype.seat = function () {
//   if (!this.data.length) {
//     this.data.push(0);
//     return 0;
//   }
//   let v = 0;
//   let d = 0;
//   let ci = 0;
//   if (!this.data.includes(0)) {
//     d = this.data[0];
//     v = 0;
//   }

//   const l = this.data.length;
//   for (let i = 0; i < l - 1; i++) {
//     const curd = ~~((this.data[i + 1] - this.data[i]) / 2);
//     if (curd > d) {
//       d = curd;
//       ci = i + 1;
//       v = ~~((this.data[i + 1] + this.data[i]) / 2);
//     }
//   }

//   if (!this.data.includes(this.l - 1)) {
//     const curd = this.l - 1 - this.data[this.data.length - 1];
//     if (curd > d) {
//       d = curd;
//       ci = l;
//       v = this.l - 1;
//     }
//   }
//   this.data.splice(ci, 0, v);
//   return v;
// };

// /**
//  * @param {number} p
//  * @return {void}
//  */
// ExamRoom.prototype.leave = function (p) {
//   const index = this.data.findIndex((item) => item === p);
//   this.data.splice(index, 1);
// };
// var scoreOfParentheses = function (S) {
//   const l = S.length;
//   if (S.length === 2) return 1;
//   let stack = [];
//   for (const s of S) {
//     if (s === "(") {
//       stack.push(s);
//     } else if (s === ")" && stack[stack.length - 1] === "(") {
//       stack.pop();
//       stack.push(1);
//     } else {
//       let index;
//       for (let i = stack.length - 1; i >= 0; i--) {
//         if (stack[i] === "(") {
//           index = i;
//           break;
//         }
//       }
//       const list = stack.splice(index, stack.length - index);
//       list.shift();
//       stack.push(2 * list.reduce((a, b) => a + b, 0));
//     }
//   }
//   return stack.reduce((a, b) => a + b, 0);
// };
// console.log(scoreOfParentheses("(()(()))"));
var maxDistToClosest = function (seats) {
  const l = seats.length;
  const res = [];
  for (let i = 0; i < l; i++) {
    if (seats[i] === 1) {
      res.push(i);
    }
  }
  let d = 0;
  if (!res.includes(0)) {
    d = res[0] - 0;
  }
  if (!res.includes(l - 1)) {
    d = Math.max(d, l - 1 - res[res.length - 1]);
  }
  for (let i = 0; i < res.length - 1; i++) {
    d = Math.max(d, ~~((res[i + 1] - res[i]) / 2));
  }
  return d;
};
const seats = [1, 0, 0, 0, 1, 0, 1];
console.log(maxDistToClosest(seats));
