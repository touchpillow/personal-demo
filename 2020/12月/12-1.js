// var frequencySort = function (s) {
//   s = s.split("");
//   const map = new Map();
//   for (const i of s) {
//     map.set(i, (map.get(i) || 0) + 1);
//   }
//   const keys = [...map.keys()];
//   keys.sort((a, b) => map.get(b) - map.get(a));
//   console.log(keys);
//   return keys.reduce((a, b) => `${a}${b.repeat(map[b])}`, "");
// };
// const s = "tree";
// console.log(frequencySort(s));
// var exchangeBits = function (num) {
//   num = num.toString(2);
//   const l = num.length;
//   let s = "";
//   if (l % 2) num = `0${num}`;
//   for (let i = 0; i < (l + 1) / 2; i++) {
//     s += num[i * 2 + 1];
//     s += num[i * 2];
//   }
//   return Number.parseInt(s, 2);
// };
// console.log(exchangeBits(3));
var waysToStep = function (n) {
  if (!n) return 1;
  const list = new Array(n + 1);
  list[0] = 1;
  list[1] = 1;
  list[2] = 2;
  for (let i = 3; i <= n; i++) {
    list[i] = list[i - 1] + list[i - 2] + list[i - 3];
  }
  return list[n];
};
