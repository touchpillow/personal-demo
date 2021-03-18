// var mincostTickets = function (days, costs) {
//   const dp = new Array(days[days.length - 1] + 1).fill(0);
//   let pre = 0;
//   for (const d of days) {
//     for (let i = pre + 1; i < d; i++) {
//       dp[i] = dp[i - 1];
//     }
//     dp[d] = Math.min(
//       (dp[d - 1] || 0) + costs[0],
//       (dp[d - 7] || 0) + costs[1],
//       (dp[d - 30] || 0) + costs[2]
//     );
//     pre = d;
//   }
//   return dp[pre];
// };
// const days = [1, 4, 6, 7, 8, 20],
//   costs = [2, 7, 15];
// console.log(mincostTickets(days, costs));
// var strWithout3a3b = function (a, b) {
//   let long = a >= b ? a : b;
//   const longS = a >= b ? "a" : "b";
//   let short = a >= b ? b : a;
//   const shortS = a >= b ? "b" : "a";
//   let res = "";
//   while (long && short) {
//     const c = Math.min(2, Math.ceil(long / short));
//     long -= c;
//     short -= 1;
//     res += `${longS}`.repeat(c) + shortS;
//   }
//   res += `${longS}`.repeat(long) + `${shortS}`.repeat(short);
//   return res;
// };
// console.log(strWithout3a3b(5, 5));
