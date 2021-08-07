// var circularPermutation = function (n, start) {
//   const targetLength = 2 ** n;
//   let ret = ["0", "1"];
//   while (ret.length < targetLength) {
//     const left = ret.map((str) => `0${str}`);
//     const right = ret.reverse().map((str) => `1${str}`);
//     ret = [...left, ...right];
//   }

//   const nums = ret.map((t) => parseInt(t, 2));
//   const index = nums.findIndex((t) => t === start);
//   return [...nums.slice(index), ...nums.slice(0, index)];
// };
var maxLength = function (arr) {
  let max = 0;
  const l = arr.length;
  const dfs = (index = 0, pre = "") => {
    if (index === l) {
      max = Math.max(pre.length, max);
    }
    for (let i = index; i < l; i++) {
      if (pre.length + arr[i].length !== new Set(`${pre}${arr[i]}`).size) {
        max = Math.max(max, pre.length);
      } else {
        dfs(i + 1, `${pre}${arr[i]}`);
      }
    }
  };
  dfs();
  return max;
};
console.log(1);
