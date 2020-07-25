// var maxProfit = function (prices) {
//   let res = 0,
//     a = prices[0];
//   prices.forEach((i) => {
//     if (i > a) res += i - a;
//     a = i;
//   });
//   return res;
// };
var isPalindrome = function (s) {
  const l = s.length;
  if (l < 2) return true;
  const a = s.replace(/\W|_/g, "").toLowerCase();
  for (let i = 0, s = Math.ceil(a.length / 2); i < s; i++) {
    if (a[i] !== a[a.length - 1 - i]) return false;
  }
  return true;
};
console.log(isPalindrome("1b1"));
var singleNumber = function (nums) {
  let map = {};
  let res = 0;
  nums.forEach((i) => {
    if (map[i] === undefined) {
      res += i;
      map[i] = 1;
    } else {
      res -= i;
    }
  });
  return res;
};
