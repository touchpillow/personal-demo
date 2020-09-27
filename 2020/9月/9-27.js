// var diffWaysToCompute = function (input) {
//   const l = input.length;
//   const res = [];
//   const search = (left, right) => {
//     if (left >= right) return;

//   };
// };
// var duplicateZeros = function (arr) {
//   let index = 0;
//   while (index < arr.length) {
//     if (arr[index] == 0) {
//       arr.splice(index, 0, 0);
//       arr.pop();
//       index++;
//     }
//     index++;
//   }
// };
// var duplicateZeros = function (arr) {
//   let index = 0;
//   const a = [];
//   while (index + a.length < arr.length) {
//     if (arr[index] == 0) {
//       a.push(index);
//     }
//     index++;
//   }

// };
var findOcurrences = function (text, first, second) {
  const word = text.split(" ");
  const l = word.length;
  const res = [];
  for (var i = 0; i < l; i++) {
    if (word[i] == first && word[i + 1] == second) {
      if (i < l - 2) res.push(word[i + 2]);
    }
  }
  return res;
};
