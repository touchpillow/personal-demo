// // var lcaDeepestLeaves = function (root) {};
// var longestWPI = function (hours) {
//   const l = hours.length;
//   let c = 0;
//   const num = [0];
//   for (const n of hours) {
//     if (n > 8) {
//       c++;
//     } else {
//       c--;
//     }
//     num.push(c);
//   }
//   const stack = [0];
//   for (let i = 1; i <= l; i++) {
//     if (num[i] < num[stack[stack.length - 1]]) {
//       stack.push(i);
//     }
//   }
//   c = 0;
//   for (let i = l; i >= 0; i--) {
//     while (stack.length && num[i] > num[stack[stack.length - 1]]) {
//       console.log(c, i - stack[stack.length - 1]);
//       c = Math.max(c, i - stack[stack.length - 1]);
//       stack.pop();
//     }
//   }
//   return c;
// };
// var lcaDeepestLeaves = function (root) {};
var longestWPI = function (hours) {
  const l = hours.length;
  let c = 0;
  const num = [0];
  for (const n of hours) {
    if (n > 8) {
      c++;
    } else {
      c--;
    }
    num.push(c);
  }
  const map = new Map();
  for (let i = 0; i <= l; i++) {
    if (!map.has(num[i])) {
      map.set(num[i], [i, i]);
    } else {
      map.get(num[i])[1] = i;
    }
  }
  const list = [...map.entries()].sort((a, b) => a[0] - b[0]);
  let min = list[0][1][0];
  let max = 0;
  const l2 = list.length;
  for (let i = 1; i < l2; i++) {
    const [value, [minIndex, maxIndex]] = list[i];
    max = Math.max(max, maxIndex - min);
    min = Math.min(min, minIndex);
  }
  return max;
};
console.log(longestWPI([6, 9, 6]));
