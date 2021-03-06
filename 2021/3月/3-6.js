// const knightDialer = function (n) {
//   const map = new Map();
//   const mod = Math.pow(10, 9) + 7;
//   map.set(1, [6, 8]);
//   map.set(2, [7, 9]);
//   map.set(3, [4, 8]);
//   map.set(4, [0, 3, 9]);
//   map.set(5, []);
//   map.set(6, [0, 1, 7]);
//   map.set(7, [2, 6]);
//   map.set(8, [1, 3]);
//   map.set(9, [2, 4]);
//   map.set(0, [4, 6]);
//   const dp1 = new Array(10).fill(1);
//   const dp2 = new Array(10).fill(0);
//   while (--n) {
//     for (let i = 0; i < 10; i++) {
//       map.get(i).forEach((item) => {
//         dp2[item] = (dp2[item] + dp1[i]) % mod;
//       });
//     }
//     for (let i = 0; i < 10; i++) {
//       dp1[i] = dp2[i];
//       dp2[i] = 0;
//     }
//   }
//   return dp1.reduce((a, b) => (a + b) % mod, 0);
// };
// console.log(knightDialer(3));
// var minAreaRect = function (points) {
//   const set = new Set(points.map((item) => `${item[0]}-${item[1]}`));
//   const l = points.length;
//   let min = Infinity;

//   for (let i = 0; i < l - 1; i++) {
//     for (let j = i + 1; j < l; j++) {
//       const leftup = points[i];
//       const rightdown = points[j];

//       if (leftup[0] !== rightdown[0] && leftup[1] !== rightdown[1]) {
//         if (
//           set.has(`${leftup[0]}-${rightdown[1]}`) &&
//           set.has(`${rightdown[0]}-${leftup[1]}`)
//         ) {
//           const cur =
//             Math.abs(leftup[0] - rightdown[0]) *
//             Math.abs(leftup[1] - rightdown[1]);
//           min = Math.min(min, cur);
//         }
//       }
//     }
//   }
//   return min === Infinity ? 0 : min;
// };
// console.log(minAreaRect(1));
// const closestCost = function (baseCosts, toppingCosts, target) {
//   let stack = [0];
//   for (const t of toppingCosts) {
//     stack = [...new Set(stack)];
//     const pre = stack.splice(0);
//     for (const p of pre) {
//       stack.push(p);

//       stack.push(p + t);

//       stack.push(p + 2 * t);
//     }
//   }
//   let cur;
//   for (const s of baseCosts) {
//     if (Math.abs(s - target) < Math.abs(target - cur)) {
//       cur = s;
//     } else if (Math.abs(s - target) === Math.abs(target - cur)) {
//       cur = Math.min(cur, s);
//     }
//   }
//   stack = [...new Set(stack)].sort((a, b) => a - b);
//   for (const v of baseCosts) {
//     if (v === target) return target;
//     if (stack.includes(target - v)) return target;
//     if (v > target) {
//       if (v - target >= Math.abs(cur - target)) continue;
//       cur = v;
//     } else {
//       for (let i = 1; i <= Math.abs(target - cur); i++) {
//         if (stack.includes(target - i - v)) {
//           cur = target - i;
//           break;
//         } else if (stack.includes(target + i - v)) {
//           if (i === Math.abs(cur - target)) continue;
//           cur = target + i;
//           break;
//         }
//       }
//     }
//   }
//   return cur;
// };
// console.log(closestCost(1));
// const a = {
//   v: 1,
//   valueOf() {
//     if (this.v++ <= 2) {
//       return 0;
//     } else {
//       return 2;
//     }
//   },
// };
// const a = (() => {
//   let v = 0;
//   return {
//     valueOf() {
//       return v++;
//     },
//   };
// })();
// console.log(a != 1 && a != 2 && a == 2);
// console.log(222);
