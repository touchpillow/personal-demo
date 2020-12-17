// var change = function (amount, coins) {
//   const dp = new Array(amount + 1).fill(0);
//   dp[0] = 1;

//   for (const item of coins) {
//     for (let i = item; i <= amount; i++) {
//       dp[i] = dp[i - item] + dp[i];
//     }
//   }
//   return dp[amount];
// };
// const amount = 5,
//   coins = [1, 2, 5];
// console.log(change(amount, coins));
var Solution = function (n_rows, n_cols) {
  this.count = n_rows * n_cols;
  this.n_cols = n_cols;
  this.flipC = new Set();
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function () {
  if (this.flipC.size === this.count) return;
  let v = ~~(Math.random() * this.count);
  while (this.flipC.has(v)) {
    v = ~~(Math.random() * this.count);
  }
  this.flipC.add(v);
  return [~~(v / this.n_rows), v % this.n_cols];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function () {
  this.flipC.clear();
};
const a = new Solution(1, 2);
console.log(a.flip());
console.log(a.flip());
a.reset();
console.log(a.flip());
