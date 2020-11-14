// var decrypt = function (code, k) {
//   const l = code.length;
//   if (!k) return new Array(l).fill(0);
//   const m = Math.abs(k);
//   k = k > 0 ? 1 : -1;
//   const res = new Array(l);
//   for (let i = 0; i < l; i++) {
//     let sum = 0;
//     for (let c = 1; c <= m; c++) {
//       sum += code[(i + c * k + l) % l];
//     }
//     res[i] = sum;
//   }
//   return res;
// };
// const code = [2, 4, 9, 3],
//   k = -2;
// console.log(decrypt(code, k));
var minimumDeletions = function (s) {
  const l = s.length;
  let a = 0,
    b = 0;
  const lista = new Array(l).fill(0);
  const listb = new Array(l).fill(0);
  for (let i = 0; i < l; i++) {
    lista[i] = b;
    if (s[i] == "b") {
      b++;
    }
  }
  for (let i = l - 1; i >= 0; i--) {
    listb[i] = a;
    if (s[i] == "a") {
      a++;
    }
  }
  let res = Infinity;
  for (let i = 0; i < l; i++) {
    res = Math.min(res, listb[i] + lista[i]);
  }
  return res;
};
const s = "baababbaabbaaabaabbabbbabaaaaaabaabababaaababbb";
console.log(minimumDeletions(s));
