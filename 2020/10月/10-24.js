// var maxScore = function (s) {
//   const l = s.length;
//   let max = 0;
//   let left = 0;
//   let right = 0;
//   for (const n of s) {
//     if (n == "1") {
//       right++;
//     }
//   }
//   for (let i = 0; i < l - 1; i++) {
//     if (s[i] == "0") {
//       left++;
//     } else {
//       right--;
//     }
//     max = Math.max(max, left + right);
//   }
//   return max;
// };
// var kidsWithCandies = function (candies, extraCandies) {
//   const max = Math.max(...candies);
//   return candies.map((item) => {
//     return item + extraCandies >= max;
//   });
// };
// var countNumbersWithUniqueDigits = function (n) {
//   if (!n) return 1;
//   const list = new Array(n + 1);
//   list[0] = 1;
//   list[1] = 9;
//   for (let i = 2; i <= n; i++) {
//     list[i] = list[i - 1] * (11 - i);
//   }
//   return list.reduce((a, b) => a + b);
// };
var countNumbersWithUniqueDigits = function (n) {
  if (!n) return 1;
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let v = 9;
    let c = 1;
    while (c < i) {
      v *= 10 - c;
      c++;
    }
    count += v;
  }
  return count;
};
console.log(countNumbersWithUniqueDigits(1));
