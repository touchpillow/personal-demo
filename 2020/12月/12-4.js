// var findString = function (words, s) {
//   return words.findIndex((i) => i == s);
// };
// var trailingZeroes = function (n) {
//   let c = 0;
//   for (let i = 1; i <= n; i++) {
//     let v = i;
//     while (!(v % 5)) {
//       c++;
//       v /= 5;
//     }
//   }
//   return c;
// };
// var find132pattern = function (nums) {
//   const l = nums.length;
//   if (l < 3) return false;
//   const left = new Array(l);
//   const right = new Array(l).fill(Infinity);
//   left[0] = nums[0];
//   const stack = [nums[l - 1]];
//   for (let i = 1; i < l; i++) {
//     left[i] = Math.min(left[i - 1], nums[i - 1]);
//   }
//   for (let i = l - 2; i >= 0; i--) {
//     while (nums[i] > stack[stack.length - 1]) {
//       right[i] = stack.pop();
//     }
//     stack.push(nums[i]);
//   }
//   console.log(right);
//   for (let i = 1; i < l - 1; i++) {
//     if (nums[i] > left[i] && nums[i] > right[i] && right[i] > left[i])
//       return true;
//   }
//   return false;
// };
// const a = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10];
// console.log(find132pattern(a));
var findMagicIndex = function (nums) {
  nums = nums.map((item, index) => {
    return item - index;
  });
  console.log(nums);
  const l = nums.length;
  const search = (left, right) => {
    if (!nums[left]) return left;
    const mid = ~~((left + right) / 2);
    if (left == mid) return !nums[right] ? right : -1;
    if (!nums[mid]) return search(left, mid);
    const leftV = search(left, mid - 1);
    if (leftV < 0) return search(mid + 1, right);
    return leftV;
  };
  return search(0, l - 1);
};
const a = [1, 1, 1];
console.log(findMagicIndex(a));
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function (A, B, C) {
  const move = (n, from, cache, to) => {
    if (n === 1) {
      to.push(from.pop());
    } else {
      move(n - 1, from, to, cache);
      move(1, from, cache, to);
      move(n - 1, cache, from, to);
    }
  };
  move(A.length, A, B, C);
};
