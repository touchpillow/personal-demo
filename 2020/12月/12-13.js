// var findPoisonedDuration = function (timeSeries, duration) {
//   const l = timeSeries.length;
//   if (!l) return 0;
//   if (l < 2) return duration;
//   let cur = 0;
//   let c = 0;
//   for (let i = 0; i < l; i++) {
//     if (timeSeries[i] > cur) {
//       c += duration;
//     } else {
//       c += timeSeries[i] + duration - cur;
//     }
//     cur = timeSeries[i] + duration;
//   }
//   return c;
// };
var Solution = function (rects) {
  this.rects = rects;
  const l = rects.length;
  this.s = rects.map((item) => {
    return (item[2] - item[0] + 1) * (item[3] - item[1] + 1);
  });
  for (let i = 1; i < l; i++) {
    this.s[i] = this.s[i - 1] + this.s[i];
  }
  this.sum = this.s[l - 1];
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
  let num = Math.random() * this.sum;
  const index = this.s.findIndex((item) => {
    return item >= num;
  });
  const item = this.rects[index];
  const w = item[2] - item[0];
  const h = item[3] - item[1];
  const wR = ~~(Math.random() * (w + 1));
  const hR = ~~(Math.random() * (h + 1));
  return [item[0] + wR, item[1] + hR];
};
