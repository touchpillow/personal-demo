// var camelMatch = function (queries, pattern) {
//   return queries.map((item) => {
//     let queryLeft = 0;
//     let patternLeft = 0;
//     const l1 = item.length;
//     const l2 = pattern.length;
//     while (queryLeft < l1 && patternLeft < l2) {
//       while (
//         item[queryLeft] !== pattern[patternLeft] &&
//         queryLeft < l1 &&
//         patternLeft < l2
//       ) {
//         if (item[queryLeft].charCodeAt() < 90) return false;
//         queryLeft++;
//       }
//       if (item[queryLeft] !== pattern[patternLeft]) return false;
//       queryLeft++;
//       patternLeft++;
//     }
//     for (let i = queryLeft; i < l1; i++) {
//       if (item[i].charCodeAt() < 90) return false;
//     }
//     return true;
//   });
// };
// const queries = [
//     "FooBar",
//     "FooBarTest",
//     "FootBall",
//     "FrameBuffer",
//     "ForceFeedBack",
//   ],
//   pattern = "FoBaT";

// console.log(camelMatch(queries, pattern));
var videoStitching = function (clips, T) {
  const dp = new Array(T + 1).fill(0);
  for (const [start, end] of clips) {
    dp[start] = Math.max(dp[start], end);
  }
  if (a[0] === 0) return -1;
  let max = 0;
  let pre = 0;
  let c = 0;
  for (let i = 0; i < T; i++) {
    if (i > pre) return -1;
    max = Math.max(dp[i], max);
    if (i === pre) {
      c++;
      pre = max;
    }
    if (max >= T) break;
  }
  return c + (pre < T ? 1 : 0);
};
const clips = [
    [0, 1],
    [6, 8],
    [0, 2],
    [5, 6],
    [0, 4],
    [0, 3],
    [6, 7],
    [1, 3],
    [4, 7],
    [1, 4],
    [2, 5],
    [2, 6],
    [3, 4],
    [4, 5],
    [5, 7],
    [6, 9],
  ],
  T = 9;
console.log(videoStitching(clips, T));
// var a;

// function a() {
//   return 1;
// }
// console.log(a);
// var a = 1;

// var a = function () {
//   return 1;
// };

// console.log(a);
