// var kthFactor = function (n, k) {
//   for (let i = 1; i <= n; i++) {
//     if (!(n % i)) {
//       k--;
//     }
//     if (!k) return i;
//   }
//   return -1;
// };
var kthFactor = function (n, k) {
  const list = [];
  const mid = Math.sqrt(n);
  for (let i = 1; i <= mid; i++) {
    if (!(n % i)) {
      list.push(i);
    }
  }
  const isOdd = !Number.isInteger(mid);
  const sum = 2 * list.length - (isOdd ? 0 : 1);
  console.log(list, isOdd);
  if (k <= list.length) return list[k - 1];
  if (k > sum) return -1;
  console.log();
  return n / list[list.length - 1 - (k - list.length - (isOdd ? 1 : 0))];
};
console.log(kthFactor(70, 7));
