// function sum(...args) {
//   let a = args.reduce((a, b) => a + b, 0);
//   console.log(a);
//   const add = (...b) => {
//     a += b.reduce((a, b) => a + b, 0);
//     return add;
//   };
//   add.toString = function () {
//     return a;
//   };
//   return add;
// }
// console.log(sum(1, 2, 3)(1));

// const btn = document.querySelector("#aaa");
// btn.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });
// // window.addEventListener("keyup", (e) => {
// //   console.log(e.key);
// // });
var firstMissingPositive = function (nums) {
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    if (nums[i] <= 0) {
      nums[i] = l + 1;
    }
  }

  for (let i = 0; i < l; i++) {
    if (nums[Math.abs(nums[i]) - 1] < 0) continue;
    nums[Math.abs(nums[i]) - 1] = nums[Math.abs(nums[i]) - 1]
      ? nums[Math.abs(nums[i]) - 1] * -1
      : -1;
  }
  for (let i = 0; i < l; i++) {
    if (nums[i] > 0) return i + 1;
  }
  return l + 1;
};
const a = [3, 4, -1, 1];
console.log(firstMissingPositive(a));
