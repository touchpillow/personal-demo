// var Solution = function (nums) {
//   this.data = nums;
// };

// /**
//  * Resets the array to its original configuration and return it.
//  * @return {number[]}
//  */
// Solution.prototype.reset = function () {
//   return this.data;
// };

// /**
//  * Returns a random shuffling of the array.
//  * @return {number[]}
//  */
// Solution.prototype.shuffle = function () {
//   const l = this.data.length;
//   const res = new Array(l);
//   const list = new Array(l).fill("").map((item, i) => i);
//   for (let i = 0; i < l; i++) {
//     const index = list.splice(~~(Math.random() * (l - i)), 1)[0];
//     res[index] = this.data[i];
//   }
//   return res;
// };
// const a = new Solution([1, 2, 3]);
// console.log(a.shuffle());
// var game = function (guess, answer) {
//   const l = guess.length;
//   let v = 0;
//   for (let i = 0; i < l; i++) {
//     if (guess[i] == answer[i]) v++;
//   }
//   return v;
// };
// var fraction = function (cont) {

// };
var fraction = function (cont) {
  const l = cont.length;
  if (l < 2) return [cont[0], 1];
  let v1 = 1,
    v2 = cont[l - 1];
  for (let i = cont.length - 2; i >= 0; i--) {
    [v1, v2] = [v2, cont[i] * v2 + v1];
  }
  return [v2, v1];
};
