/*
 * @Author: your name
 * @Date: 2021-10-15 10:27:21
 * @LastEditTime: 2021-10-15 17:51:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/personal-demo/2021/10月/10-15.js
 */
// console.log(a);

// {
//   console.log(a, window.a);
//   a = 1;
//   console.log(a, window.a);
//   function a() {}
//   console.log(a, window.a);
//   a = 5;
//   console.log(a, window.a);
//   function a() {}
//   console.log(a, window.a);
// }

// console.log(a, window.a);
// {
//   console.log(a, window.a);
//   a = 1;
//   console.log(a, window.a);
//   function a() {}
//   console.log(a, window.a);
//   a = 5;
//   console.log(a, window.a);
// }
// console.log(a, window.a);
// const a = 3;
// const b = [
//   [1, 2],
//   [1, 3],
//   [1, 8],
//   [2, 6],
//   [3, 1],
//   [3, 10],
// ];
// var maxNumberOfFamilies = function (n, reservedSeats) {
//   let c = 0;
//   const set = new Set();
//   for (const [i, j] of reservedSeats) {
//     set.add(`${i}-${j}`);
//   }
//   for (let i = 1; i <= n; i++) {
//     let flag = true;
//     for (let j = 2; j <= 5; j++) {
//       if (set.has(`${i}-${j}`)) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       c++;
//       for (let j = 2; j <= 5; j++) {
//         set.add(`${i}-${j}`);
//       }
//     }
//     console.log(c, i);
//     let flag2 = true;
//     for (let j = 6; j <= 9; j++) {
//       if (set.has(`${i}-${j}`)) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag2) {
//       c++;
//       for (let j = 6; j <= 9; j++) {
//         set.add(`${i}-${j}`);
//       }
//     }
//     console.log(c, i);
//     if (flag || flag2) continue;
//     flag = true;
//     for (let j = 4; j <= 7; j++) {
//       if (set.has(`${i}-${j}`)) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       c++;
//     }
//   }
//   return c;
// };
// console.log(maxNumberOfFamilies(a, b));
var getKth = function (lo, hi, k) {
  const map = new Map();
  map.set(1, 0);
  map.set(2, 1);
  const search = (i) => {
    if (map.has(i)) return map.get(i);

    const res = 1 + search(i % 2 ? 3 * i + 1 : i / 2);

    map.set(i, res);
    return res;
  };
  const res = [];
  for (let i = lo; i <= hi; i++) {
    res.push(i);
  }
  return res.sort((a, b) => {
    const va = search(a);
    const vb = search(b);
    if (va === vb) return a - b;
    return va - vb;
  })[k - 1];
};
