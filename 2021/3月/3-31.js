// var minScoreTriangulation = function (indexs) {
//   let min = Infinity;
//   if (indexs.length < 3) return 0;
//   for (let i = 0; i < indexs.length; i++) {
//     if (!(indexs.length % 2) && i >= 2) break;
//     let v = 0;
//     for (let j = i; j + 2 <= indexs.length + i; j += 2) {
//       v +=
//         indexs[j % indexs.length] *
//         indexs[(j + 1) % indexs.length] *
//         indexs[(j + 2) % indexs.length];
//     }
//     const next = [];
//     for (let j = i; j < indexs.length + i; j += 2) {
//       next.push(indexs[j % indexs.length]);
//     }
//     console.log(v, next);
//     v += minScoreTriangulation(next);
//     min = Math.min(min, v);
//   }
//   return min;
// };
// // const a = [2, 1, 4, 4];
// // const a = [4, 3, 4, 3, 5];
// // const a = [3, 7, 4, 5];
// const a = [5, 5, 5, 4, 2, 5];
// console.log(minScoreTriangulation(a));
var numMovesStonesII = function (stones) {
  stones.sort((a, b) => a - b);
  const len = stones.length;
  let min = len - 1;
  for (let i = 0; i <= len - 1; ++i) {
    let tempI = i + 1;
    while (tempI <= len - 1 && stones[tempI] - stones[i] <= len - 1) {
      ++tempI;
    }
    if (
      tempI - 1 - i === len - 2 &&
      stones[tempI - 1] - stones[i] === len - 2
    ) {
      continue;
    }
    min = Math.min(min, len + i - tempI);
    if (tempI === len - 1) {
      break;
    }
  }
  return [
    min,
    Math.max(stones[len - 1] - stones[1], stones[len - 2] - stones[0]) +
      2 -
      len,
  ];
};
console.log(numMovesStonesII([1, 2, 3, 6]));
