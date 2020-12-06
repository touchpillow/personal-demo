// var masterMind = function (solution, guess) {
//   const l = solution.length;
//   let c = 0;
//   const map1 = new Map();
//   const map2 = new Map();
//   for (let i = 0; i < l; i++) {
//     if (solution[i] == guess[i]) {
//       c++;
//     }
//     map1.set(solution[i], (map1.get(solution[i]) || 0) + 1);
//     map2.set(guess[i], (map2.get(guess[i]) || 0) + 1);
//   }
//   let v = 0;
//   for (const key of map2.keys()) {
//     v += Math.min(map2.get(key), map1.get(key) || 0);
//   }
//   return [c, v - c];
// };
// const a = "RGBY",
//   b = "GGRR";
// console.log(masterMind(a, b));
// var maxSubArray = function (nums) {
//   let sum = -Infinity;
//   let pre = -Infinity;
//   for (const item of nums) {
//     pre = Math.max(item, pre + item);
//     sum = Math.max(sum, pre);
//   }
//   return sum;
// };
/**
 * @param {string} command
 * @return {string}
 */
// var interpret = function (command) {
//   let res = "";
//   const l = command.length;
//   for (let i = 0; i < l; i++) {
//     if (command[i] == "G") {
//       res += "G";
//     } else if (command.slice(i, i + 2) == "()") {
//       i++;
//       res += "o";
//     } else if (command.slice(i, i + 4) == "(al)") {
//       i += 3;
//       res += "al";
//     }
//   }
//   return res;
// };
// const command = "G()(al)";
// console.log(interpret(command));
var minMoves2 = function (nums) {
  const l = nums.length;
  if (l < 2) return 0;
  nums.sort((a, b) => a - b);
  const average = ~~((l - 1) / 2);
  console.log(average);
  return nums.reduce((res, item) => {
    res += Math.abs(item - average);
    return res;
  }, 0);
};
console.log(minMoves2([1, 2, 3]));
