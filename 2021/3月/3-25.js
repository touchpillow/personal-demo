// var maxScoreSightseeingPair = function (values) {
//   let max = 0;
//   let cur = values[0];
//   const l = values.length;
//   for (let i = 1; i < l; i++) {
//     max = Math.max(max, cur + values[i] - i);
//     cur = Math.max(cur, values[i] + i);
//   }
//   return max;
// };
// const values = [1, 2];
// console.log(maxScoreSightseeingPair(values));
var smallestRepunitDivByK = function (K) {
  if (!(K % 2) || !(K % 5)) return -1;
  let num = 0;
  let len = 1;
  while (true) {
    num = (num * 10 + 1) % K;

    if (!num) break;

    len++;
  }
  return len;
};
