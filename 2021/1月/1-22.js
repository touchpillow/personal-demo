// var openLock = function (deadends, target) {
//   if (target === "0000") return 0;
//   if (deadends.includes("0000")) return -1;
//   const dp = new Array(10)
//     .fill("")
//     .map(() =>
//       new Array(10)
//         .fill("")
//         .map(() =>
//           new Array(10).fill("").map(() => new Array(10).fill(Infinity))
//         )
//     );
//   const setValue = (a, b, c, d, value) => {
//     dp[a][b][c][d] = value;
//   };
//   const getValue = (a, b, c, d) => {
//     return dp[a][b][c][d];
//   };
//   deadends.forEach((item) => {
//     setValue(item[0], item[1], item[2], item[3], 0);
//   });
//   const stack = [[0, 0, 0, 0, 0]];
//   while (stack.length) {
//     const [a, b, c, d, v] = stack.shift();
//     if (getValue(a, b, c, d) === 0) continue;
//     if (v >= getValue(a, b, c, d)) continue;
//     if (v >= getValue(target[0], target[1], target[2], target[3])) continue;
//     if (`${a}${b}${c}${d}` === target) {
//       setValue(a, b, c, d, v);
//       continue;
//     }
//     stack.push([(a + 11) % 10, b, c, d, v + 1]);
//     stack.push([(a + 9) % 10, b, c, d, v + 1]);
//     stack.push([a, (b + 11) % 10, c, d, v + 1]);
//     stack.push([a, (b + 9) % 10, c, d, v + 1]);
//     stack.push([a, b, (c + 11) % 10, d, v + 1]);
//     stack.push([a, b, (c + 9) % 10, d, v + 1]);
//     stack.push([a, b, c, (d + 11) % 10, v + 1]);
//     stack.push([a, b, c, (d + 9) % 10, v + 1]);
//   }
//   return getValue(target[0], target[1], target[2], target[3]);
// };
// const a = ["0201", "0101", "0102", "1212", "2002"];
// const target = "0202";
// console.log(openLock(a, target));
var reachNumber = function (target) {
  if (target === 0) return 0;
  target = Math.abs(target);
  let k = 0;
  while (target > 0) {
    K++;
    target -= k;
  }
  return target % 2 == 0 ? k : k + 1 + (k % 2);
};
