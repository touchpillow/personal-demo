var longestMountain = function (arr) {
  const l = arr.length;
  const dp1 = new Array(l).fill(1);
  const dp2 = new Array(l).fill(1);
  for (let i = 0; i < l - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      dp1[i + 1] = dp1[i] + 1;
    }
  }
  for (let i = l - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      dp2[i - 1] = dp2[i] + 1;
    }
  }
  const res = dp1
    .map((i, index) => [i, index])
    .filter((item) => item[0] > 1 && dp2[item[1]] > 1)
    .map((item) => item[0] + dp2[item[1]]);
  return res.length ? Math.max(...res) - 1 : 0;
};
const a = [2, 2, 2];

console.log(longestMountain(a));
