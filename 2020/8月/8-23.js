// var mostVisited = function (n, rounds) {
//   const list = new Array(n + 1).fill(0);
//   const l = rounds.length;
//   list[rounds[0]]++;
//   for (let i = 0; i < l - 1; i++) {
//     if (rounds[i] < rounds[i + 1]) {
//       for (let j = rounds[i] + 1; j <= rounds[i + 1]; j++) {
//         list[j]++;
//       }
//     } else {
//       for (let j = rounds[i] + 1; j <= n; j++) {
//         list[j]++;
//       }
//       for (let j = 1; j <= rounds[i + 1]; j++) {
//         list[j]++;
//       }
//     }
//   }
//   const res = [];
//   let max = 0;
//   for (let i = 1; i <= n; i++) {
//     if (list[i] > max) {
//       max = list[i];
//       res.splice(0, Infinity, i);
//     } else if (list[i] == max) {
//       res.push(i);
//     }
//   }
//   return res;
// };
// const n = 2,
//   rounds = [2, 1, 2, 1, 2, 1, 2, 1, 2];
// console.log(mostVisited(n, rounds));
// 1 2 3 4 5 6
// var maxCoins = function (piles) {
//   const l = piles.length;
//   piles.sort((a, b) => a - b);
//   let res = 0;
//   for (let i = l / 3; i < l; i += 2) {
//     res += piles[i];
//   }
//   return res;
// };
// console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]));
const findIndex = (v, list) => {
  for (let i = 0, l = list.length; i < l; i++) {
    if (list[i] > v) {
      list.splice(i, 0, v);
      return i;
    }
  }
  list.push(v);
  return list.length - 1;
};
var findLatestStep = function (arr, m) {
  const l = arr.length;
  const list = [];
  if (m === l) return l;
  for (let i = l - 1; i >= 0; i--) {
    const left = findIndex(arr[i], list);
    let pre = list[left - 1] || 0;
    for (
      let j = left, count = 0;
      count < 2 && j + count < list.length;
      count++
    ) {
      console.log(left, pre, list, arr[i], list[j + count]);
      if (list[j + count] - pre - 1 == m) return i;
      pre = list[j + count];
    }
    if (l - pre === m) return i;
  }
  return -1;
};
const arr = [5, 3, 4, 7, 8, 14, 11, 9, 2, 12, 1, 13, 10, 6],
  m = 6;
console.log(findLatestStep(arr, m));
