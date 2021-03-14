// var numsSameConsecDiff = function (n, k) {
//   const res = [];
//   const dfs = (preN, s) => {
//     if (preN >= 10 || preN < 0) return;
//     if (s.length === n) {
//       res.push(Number(s));
//       return;
//     }
//     dfs(preN + k, `${s}${preN + k}`);
//     if (!k) return;
//     dfs(preN - k, `${s}${preN - k}`);
//   };
//   for (let i = 1; i <= 9; i++) {
//     dfs(i, `${i}`);
//   }
//   return res;
// };
// const n = 2,
//   k = 0;
// console.log(numsSameConsecDiff(n, k));
var pancakeSort = function (arr) {
  const res = [];
  const dfs = (len) => {
    if (len < 2) return;
    let min = Infinity;
    let index;
    for (let i = 0; i < len; i++) {
      if (arr[i] < min) {
        index = i;
        min = arr[i];
      }
    }
    if (index === len - 1) {
      dfs(len - 1);
      return;
    }

    if (index === 0) {
      res.push(len);
      for (let i = 0; i < len / 2; i++) {
        [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
      }
      dfs(len - 1);
      return;
    }
    for (let i = 0; i <= index / 2; i++) {
      [arr[i], arr[index - i]] = [arr[index - i], arr[i]];
    }
    for (let i = 0; i < len / 2; i++) {
      [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
    }
    res.push(index + 1);
    res.push(len);
    dfs(len - 1);
  };
  dfs(arr.length);
  res.push(arr.length);
  return res;
};
const a = [2, 3, 1, 4];
console.log(pancakeSort(a));
