// var monotoneIncreasingDigits = function (N) {
//   N = [...`${N}`].map((item) => Number(item));
//   const l = N.length;
//   let index;
//   for (let i = l - 1; i > 0; i--) {
//     if (N[i] < N[i - 1]) {
//       index = i;
//       N[i - 1]--;
//     }
//   }
//   if (index === undefined) return Number(N.join(""));
//   return Number(
//     N.slice(0, index)
//       .concat(new Array(l - index).fill(9))
//       .join("")
//   );
// };
// console.log(monotoneIncreasingDigits(10));
var dailyTemperatures = function (T) {
  const l = T.length;
  const res = new Array(l).fill(0);
  const stack = [l - 1];
  for (let i = l - 2; i >= 0; i--) {
    while (stack.length && T[stack[0]] <= T[i]) {
      stack.shift();
    }
    if (!stack.length) {
      res[i] = 0;
    } else {
      res[i] = stack[0] - i;
    }
    stack.unshift(i);
  }
  return res;
};
const a = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(a));
