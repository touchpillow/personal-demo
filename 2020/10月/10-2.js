// var numPrimeArrangements = function (n) {
//   if (n < 3) return 1;
//   let mod = 1000000007;
//   let primeCount = 0;
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) primeCount++;
//   }
//   let a = total(primeCount);
//   for (let i = 2; i <= noPrimeCount; i++) {
//     a = (a * i) % mod;
//   }
//   return a;
//   function isPrime(n) {
//     for (let i = 2; i <= n / i; i++) {
//       if (n % i === 0) return false;
//     }
//     return true;
//   }
//   function total(n) {
//     if (n < 3) return n;
//     return (total(n - 1) * n) % mod;
//   }
// };
// var distanceBetweenBusStops = function (distance, start, destination) {
//   const l = distance.length;
//   let a = 0,
//     b = 0;
//   for (let i = start; i != destination; i = (i + 1) % l) {
//     a += distance[i];
//   }
//   for (let i = start; i != destination; i = (i - 1 + l) % l) {
//     b += distance[(i - 1 + l) % l];
//   }
//   return Math.min(a, b);
// };
var lengthOfLIS = function (nums) {
  const l = nums.length;
  if (!l) return 0;
  const list = new Array(l);
  list[0] = 1;
  for (let i = 1; i < l; i++) {
    list[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        list[i] = Math.max(list[i], list[j] + 1);
      }
    }
  }
  return Math.max(...list);
};
const a = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(a));
