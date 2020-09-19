// var largestSumAfterKNegations = function (A, K) {
//   if (!A.length) return 0;
//   A.sort((a, b) => a - b);
//   const index = A.findIndex((i) => i >= 0);
//   const left = A.slice(0, index);
//   const right = A.slice(index);
//   const l = left.length;
//   if (l) {
//     if (K <= l) {
//       for (let i = 0; i < K; i++) {
//         left[i] *= -1;
//       }
//       return [...left, ...right].reduce((a, b) => a + b);
//     } else {
//       for (let i = 0; i < l; i++) {
//         left[i] *= -1;
//       }
//       let d = 0;
//       if ((K - l) % 2) {
//         d = Math.min(right[0], left[l - 1]);
//       }
//       return [...left, ...right].reduce((a, b) => a + b) - 2 * d;
//     }
//   } else {
//     if (K % 2) {
//       right[0] *= -1;
//     }
//     return right.reduce((a, b) => a + b);
//   }
// };
const isre = (point1, h1, w1, point2, h2, w2) => {
  return (
    Math.abs(point1[0] - point2[0]) < (w1 + w2) / 2 &&
    Math.abs(point1[1] - point2[1]) < (h1 + h2) / 2
  );
};
const isIn = (point1, h1, w1, point2, h2, w2) => {
  return (
    (Math.abs(point1[0] - point2[0]) <= (w1 - w2) / 2 &&
      Math.abs(point1[1] - point2[1]) <= (h1 - h2) / 2) ||
    (Math.abs(point1[0] - point2[0]) <= (w2 - w1) / 2 &&
      Math.abs(point1[1] - point2[1]) <= (h2 - h1) / 2)
  );
};
var computeArea = function (A, B, C, D, E, F, G, H) {
  const point1 = [(A + C) / 2, (B + D) / 2];
  const point2 = [(E + G) / 2, (F + H) / 2];
  const w1 = C - A;
  const h1 = D - B;
  const w2 = G - E;
  const h2 = H - F;
  const flag = isre(point1, h1, w1, point2, h2, w2);
  const flag2 = isIn(point1, h1, w1, point2, h2, w2);
  const s1 = (C - A) * (D - B);
  const s2 = (G - E) * (H - F);
  console.log(flag, flag2);
  if (flag2) {
    return Math.max(s1, s2);
  } else if (flag) {
    const x = [A, C, E, G].sort((a, b) => a - b);
    const y = [B, D, F, H].sort((a, b) => a - b);
    console.log(x);
    console.log(y);
    return s1 + s2 - (x[2] - x[1]) * (y[2] - y[1]);
  } else {
    return s1 + s2;
  }
};
console.log(computeArea(-5, -3, 3, 0, -3, -3, 3, 3));
