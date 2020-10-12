// var freqAlphabets = function (s) {
//   const l = s.length;
//   let stack = [];
//   for (let i = l - 1; i >= 0; i--) {
//     if (s[i] == "#") {
//       stack.unshift(s.slice(i - 2, i));
//       i -= 2;
//     } else {
//       stack.unshift(s[i]);
//     }
//   }
//   return stack
//     .map((i) => {
//       return String.fromCharCode(+i + 96);
//     })
//     .join("");
// };
// var decompressRLElist = function (nums) {
//   const l = nums.length / 2;
//   const res = [];
//   for (let i = 0; i < l; i++) {
//     res.push(...new Array(nums[2 * i]).fill(nums[2 * i + 1]));
//   }
//   return res;
// };
var coinChange = function (coins, amount) {
  coins.sort((a, b) => a - b);
  const res = new Array(amount + 1).fill(Infinity);
  res[0] = 0;
  for (let n of coins) {
    for (let i = n; i <= amount; i++) {
      res[i] = Math.min(res[i], res[i - n] + 1);
    }
  }
  return res[amount] == Infinity ? -1 : res[amount];
};
const coins = [1],
  amount = 2;
console.log(coinChange(coins, amount));
