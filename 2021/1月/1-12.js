// var knightProbability = function (N, K, r, c) {
//   const stepX = [2, 2, 1, 1, -1, -1, -2, -2];
//   const stepY = [1, -1, 2, -2, 2, -2, 1, -1];
//   let map1 = new Map();
//   let map2 = new Map();
//   map1.set(`${r}-${c}`, 1);
//   while (K) {
//     K--;
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < N; j++) {
//         if (!map1.has(`${i}-${j}`)) continue;
//         stepX.forEach((x, index) => {
//           const y = stepY[index];
//           if (i + x < 0 || i + x >= N) return;
//           if (j + y < 0 || j + y >= N) return;
//           map2.set(
//             `${i + x}-${j + y}`,
//             (map2.get(`${i + x}-${j + y}`) || 0) +
//               (map1.get(`${i}-${j}`) || 0) / 8
//           );
//         });
//       }
//     }
//     console.log(map1, map2);
//     map1 = new Map(map2.entries());
//     map2.clear();
//   }
//   return [...map1.values()].reduce((a, b) => a + b, 0);
// };
// console.log(knightProbability(3, 1, 1, 2));
var topKFrequent = function (words, k) {
  const wordList = new Set(words);
  const map = new Map();
  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }
  return wordList
    .sort((a, b) => {
      if (map.get(a) !== map.get(b)) return map.get(b) - map.get(a);
      if (a < b) return -1;
      return 1;
    })
    .slice(0, K);
};
