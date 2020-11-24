// var eraseOverlapIntervals = function (intervals) {
//   if (intervals.length < 2) return 0;
//   const map = {};
//   for (const [start, end] of intervals) {
//     if (map[start] !== undefined) {
//       map[start] = Math.min(map[start], end);
//     } else {
//       map[start] = end;
//     }
//   }
//   const keys = Object.keys(map).sort((a, b) => {
//     if (map[a] !== map[b]) return map[a] - map[b];
//     return a - b;
//   });
//   let pre = -Infinity;
//   let c = 0;
//   for (const n of keys) {
//     if (n >= pre) {
//       c++;
//       pre = map[n];
//     }
//   }
//   return c;
// };
// var compressString = function (S) {
//   const l = S.length;
//   let cur = S[0];
//   let res = "";
//   let n = 1;
//   for (let i = 1; i < l; i++) {
//     if (S[i] !== cur) {
//       n = 1;
//       res += `${cur}${n}`;
//       cur = S[i];
//     } else {
//       n++;
//     }
//   }
//   res += `${cur}${n}`;
//   return res.length < S.length ? res : S;
// };
// var isFlipedString = function (s1, s2) {
//   const l1 = s1.length;
//   const l2 = s2.length;
//   if (l1 !== l2) return false;
//   for (let i = 0; i < l2; i++) {
//     if (s1[0] !== s2[i]) continue;
//     if (s2.slice(0, i) + s2.slice(i) == s1) return true;
//   }
//   return false;
// };
// var eraseOverlapIntervals = function (intervals) {
//   if (intervals.length < 2) return 0;
//   const l = intervals.length;
//   intervals.sort((a, b) => {
//     if (a[0] !== b[0]) return a[0] - b[0];
//     return a[1] - b[1];
//   });
//   const list = new Array(l).fill(1);
//   for (let i = 1; i < l; i++) {
//     for (let j = 0; j < i; j++) {
//       if (intervals[j][1] <= intervals[i][0]) {
//         list[i] = Math.max(list[i], list[i] + 1);
//       }
//     }
//   }
//   console.log(list);
//   return l - Math.max(...list);
// };
// const a = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 3],
// ];
// console.log(eraseOverlapIntervals(a));
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length < 2) return 0;
  intervals.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  });
  let pre = -Infinity;
  let c = 0;
  for (const item of intervals) {
    if (item[0] >= pre) {
      c++;
      pre = item[1];
    }
  }
  return intervals.length - c;
};
