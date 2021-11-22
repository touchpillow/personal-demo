// var kthFactor = function (n, k) {
//   for (let i = 1; i <= n; i++) {
//     if (!(n % i)) {
//       k--;
//     }
//     if (!k) return i;
//   }
//   return -1;
// };
// var kthFactor = function (n, k) {
//   const list = [];
//   const mid = Math.sqrt(n);
//   for (let i = 1; i <= mid; i++) {
//     if (!(n % i)) {
//       list.push(i);
//     }
//   }
//   const isOdd = !Number.isInteger(mid);
//   const sum = 2 * list.length - (isOdd ? 0 : 1);
//   console.log(list, isOdd);
//   if (k <= list.length) return list[k - 1];
//   if (k > sum) return -1;
//   console.log();
//   return n / list[list.length - 1 - (k - list.length - (isOdd ? 1 : 0))];
// };
// console.log(kthFactor(70, 7));
const getMinCandys = (scores) => {
  const len = scores.length;
  const candys = new Array(len);
  candys[0] = 1;
  let min = 1;
  let sum = 1;
  for (let i = 1; i < len; i++) {
    if (scores[i] > scores[i - 1]) {
      candys[i] = candys[i - 1] + 1;
    } else if (scores[i] === scores[i - 1]) {
      // 如果同分同糖果，改一下这里
      candys[i] = candys[i - 1] < 1 ? candys[i - 1] : 1;
    } else {
      candys[i] = Math.min(candys[i - 1] - 1, 1);
    }
    min = Math.min(min, candys[i]);

    sum += candys[i];
  }
  console.log(candys);
  return sum + (1 - min) * len;
};
console.log(getMinCandys([5, 4, 4, 1, 1]));
