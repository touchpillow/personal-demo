// var mirrorReflection = function (p, q) {
//   let d = 1;
//   let h = q;
//   while (h % p) {
//     d++;
//     h += q;
//   }
//   if ((h / p) % 2) {
//     return d % 2 ? 1 : 2;
//   } else {
//     return 0;
//   }
// };
// console.log(mirrorReflection(4, 3));
var matrixScore = function (A) {
  const h = A.length;
  const w = A[0].length;
  const dh = new Array(h).fill(0);
  const dw = new Array(w).fill(0);
  for (let i = 0; i < h; i++) {
    if (A[i][0] !== 1) dh[i]++;
  }
  for (let i = 1; i < w; i++) {
    let c = 0;
    for (let j = 0; j < h; j++) {
      if (!(dh[j] % 2) && A[j][i] === 1) c++;
      if (dh[j] % 2 && A[j][i] === 0) c++;
    }
    if (c < h / 2) {
      dw[i]++;
    }
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if ((dh[i] + dw[j]) % 2) {
        A[i][j] = A[i][j] === 1 ? 0 : 1;
      }
    }
  }
  return A.reduce((res, item) => res + Number.parseInt(item.join(""), 2), 0);
};
