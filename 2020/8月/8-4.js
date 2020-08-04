// var findLHS = function (nums) {
//   const map = new Map();
//   let res = 0;
//   for (const i of nums) {
//     map.set(i, (map.get(i) || 0) + 1);
//   }
//   for (const i of map.keys()) {
//     res = Math.max(map.get(i) + map.get(i + 1), res);
//   }
//   return res;
// };
// var maxCount = function (m, n, ops) {
//   let mina = 0;
//   let minb = 0;
//   for (const [a, b] of ops) {
//     a = Math.min(mina, a);
//     b = Math.min(minb, b);
//   }
//   return mina * minb;
// };
var numDecodings = function (s) {
  const l = s.length;
  let count = 0;
  const map = new Map();
  for (let i = 0; i < l; i++) {
    if (!i) {
      if (s[i] == "0") return 0;
      count++;
    } else {
      if (s[i] == "0") {
        if (Number(s[i - 1]) > 2) return 0;
        if (s[i - 1] == "0") return 0;
        if (s[i - 2] != "0") {
          count = map.get(i - 2) || 1;
        }
      } else if (s[i - 1] == "0") {
      } else {
        if (Number(`${s[i - 1]}${s[i]}`) > 26) {
        } else {
          count = (map.get(i - 1) || 0) + (map.get(i - 2) || 1);
        }
      }
    }
    console.log(i, count);
    map.set(i, count);
  }
  return count;
};
var a = "1010";
console.log(numDecodings(a));
