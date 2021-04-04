// var squareIsWhite = function (coordinates) {
//   const first = coordinates[0].charCodeAt() - 97;
//   const second = Number(coordinates[1]);
//   return (!!(first % 2) && !!(second % 2)) || (!(first % 2) && !(second % 2));
// };
// console.log(squareIsWhite("c7"));
// var areSentencesSimilar = function (sentence1, sentence2) {
//   if (sentence1 === sentence2) return true;
//   const list1 = sentence1.split(" ");
//   const list2 = sentence2.split(" ");
//   if (list1.length === list2.length) return false;
//   const long = list1.length > list2.length ? list1 : list2;
//   const short = list1.length > list2.length ? list2 : list1;
//   const l1 = short.length;
//   let left = 0;
//   let right = 0;
//   while (long[left] === short[left] && left < l1) {
//     left++;
//   }
//   if (left >= l1) return true;
//   while (
//     long[long.length - 1 - right] === short[l1 - 1 - right] &&
//     right < l1
//   ) {
//     right++;
//   }
//   if (right >= l1) return true;
//   return left + right >= l1;
// };
// const sentence1 = "My name is Haley",
//   sentence2 = "My Haley";
// console.log(areSentencesSimilar(sentence1, sentence2));
// var countNicePairs = function (nums) {
//   const mod = Math.pow(10, 9) + 7;
//   const value = nums.map((item) => {
//     const s = `${item}`;
//     let res = "";
//     for (const n of s) {
//       res = `${n}${res}`;
//     }
//     return item - Number(res);
//   });
//   const map = new Map();
//   for (const v of value) {
//     map.set(v, (map.get(v) || 0) + 1);
//   }
//   let c = 0;
//   for (const n of map.values()) {
//     c = (c + (n * (n - 1)) / 2) % mod;
//   }
//   return c;
// };
// const nums = [13, 10, 35, 24, 76];
// console.log(countNicePairs(nums));
// var maxHappyGroups = function (batchSize, groups) {
//   const dp = new Array(batchSize).fill(0);
//   for (const v of groups) {
//     dp[v % batchSize]++;
//   }
//   let c = dp[0];
//   dp[0] = 0;
//   for (let i = 1; i <= batchSize / 2; i++) {
//     if (i === batchSize / 2) {
//       const v = ~~(dp[i] / 2);
//       c += v;
//       dp[i] -= 2 * v;
//     } else {
//       const v = Math.min(dp[i], dp[batchSize - i]);
//       c += v;
//       dp[i] -= v;
//       dp[batchSize - i] -= v;
//     }
//   }
// };
