var minDistance = function (word1, word2) {
  const l1 = word1.length;
  const l2 = word2.length;
  const dp1 = new Array(l2 + 1).fill(0);
  const dp2 = new Array(l2 + 1).fill(0);
  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp2[j] = dp1[j - 1] + 1;
      } else {
        dp2[j] = Math.max(dp1[j], dp2[j - 1]);
      }
    }
    dp1.splice(0, l2 + 1, ...dp2);
  }
  return l1 + l2 - 2 * dp2[l2];
};
const word1 = "sea",
  word2 = "eat";
console.log(minDistance(word1, word2));
// const gcd = (a, b) => {
//   if (!(a % b)) {
//     return b;
//   }
//   return gcd(b, a % b);
// };
// var fractionAddition = function (expression) {
//   const list = expression.match(/[+-]?\d+\/\d+/g);
//   const l = list.length;
//   const flagList = new Array(l).fill(1);
//   const vList = list
//     .map((item, index) => {
//       if (item[0] === "-") {
//         flagList[index] = -1;
//       }
//       return item.replace(/[+-]/g, "");
//     })
//     .map((item) => item.split("/"));
//   const v = vList.reduce((a, b) => {
//     return (a * Number(b[1])) / gcd(a, Number(b[1]));
//   }, 1);
//   let res = vList.reduce((a, b, index) => {
//     return a + (b[0] * flagList[index] * v) / Number(b[1]);
//   }, 0);
//   if (res === 0) return `0/1`;
//   const flag = res > 0 ? "" : "-";
//   res = Math.abs(res);
//   const resV = gcd(v, res);
//   return `${flag}${res / resV}/${v / resV}`;
// };
// const s = "1/3-1/2";
// console.log(fractionAddition(s));
