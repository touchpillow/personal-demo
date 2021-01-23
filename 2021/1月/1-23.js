// var pyramidTransition = function (bottom, allowed) {
//   const dp = new Array(7).fill("").map(() => new Array(7).fill(0));
//   for (const a of allowed) {
//     dp[a[0].charCodeAt(0) - 65][a[1].charCodeAt(1) - 65] =
//       1 << (a[2].charCodeAt(2) - 65);
//   }

//   seen = new Set();
//   const N = bottom.length();
//   const A = new Array(N).fill("").map(() => new Array(N).fill(0));
//   let t = 0;
//   for (const c of bottom) {
//     A[N - 1][t++] = c.charCodeAt() - 65;
//   }
//   const solve = (A, R, N, i) => {
//     if (N == 1 && i == 1) {
//       return true;
//     } else if (i == N) {
//       if (seen.has(R)) return false;
//       seen.add(R);
//       return solve(A, 0, N - 1, 0);
//     } else {
//       let w = T[A[N][i]][A[N][i + 1]];

//       for (let b = 0; b < 7; ++b)
//         if (((w >> b) & 1) != 0) {
//           A[N - 1][i] = b;
//           if (solve(A, R * 8 + (b + 1), N, i + 1)) return true;
//         }
//       return false;
//     }
//   };
//   return solve(A, 0, N - 1, 0);
// };
var partitionLabels = function (S) {
  const l = S.length;
  const map = new Map();
  for (let i = 0; i < l; i++) {
    map.set(S[i], i);
  }
  const stack = [];
  let max = 0;
  let c = 0;
  for (let i = 0; i < l; i++) {
    c++;
    max = Math.max(max, map.get(S[i]));
    if (i === max) {
      max = 0;
      stack.push(c);
      c = 0;
    }
  }
  return stack;
};
