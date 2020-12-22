// var complexNumberMultiply = function (a, b) {
//   let [a1, ai] = a.split("+");
//   let [b1, bi] = b.split("+");
//   ai = Number.parseInt(ai);
//   bi = Number.parseInt(bi);
//   return `${Number(a1) * Number(b1) + ai * bi}+${a1 * bi + ai * b1}i`;
// };
var findMinDifference = function (timePoints) {
  const l = timePoints.length;
  const time = timePoints
    .map((item) => {
      const [h, m] = item.split(":");
      return Number(m) + Number(h) * 60;
    })
    .sort((a, b) => a - b);
  let min = 24 * 60;
  for (let i = 1; i < l; i++) {
    min = Math.min(min, time[i] - time[i - 1]);
  }
  min = Math.min(
    min,
    Math.min(time[l - 1] - time[0], time[0] + 24 * 60 - time[l - 1])
  );
  return min;
};
