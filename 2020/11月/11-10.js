// var fib = function (n) {
//   const list = new Array(n + 1);
//   list[0] = 0;
//   list[1] = 1;
//   const mod = Math.pow(10, 9) + 7;
//   for (let i = 2; i <= n; i++) {
//     list[i] = (list[i - 1] + list[i - 2]) % mod;
//   }
//   return list[n];
// };
// var fib = function (n) {
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   const mod = Math.pow(10, 9) + 7;
//   let v1 = 0;
//   let v2 = 1;
//   while (n-- > 1) {
//     [v1, v2] = [v2, (v1 + v2) % mod];
//   }
//   return v2;
// };
// var minArray = function (numbers) {
//   const l = numbers.length;
//   for (let i = 1; i < l; i++) {
//     if (numbers[i] < numbers[i - 1]) return numbers[i];
//   }
//   return numbers[0];
// };
var Solution = function (nums) {
  this.map = new Map();
  this.list = nums;
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    if (this.map.has(nums[i])) {
      this.map.get(nums[i]).push(i);
    } else {
      this.map.set(nums[i], [i]);
    }
  }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const res = this.map.get(target);
  const index = ~~(Math.random() * res.length);
  return res[index];
};
const a = new Solution([1, 2, 3, 3, 3]);
console.log(a.pick(3));
